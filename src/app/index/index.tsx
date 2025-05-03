import { useCallback, useState } from "react";
import { View, FlatList, Alert } from "react-native";
import { useFocusEffect } from "expo-router";
import * as WebBrowser from "expo-web-browser";

import { styles } from "@/styles/index";

import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { Header } from "@/components/header";
import { EmptyList } from "@/components/empty-list";
import { LinkDetails } from "@/components/link-details";

import { categories } from "@/utils/categories";
import { LinkStorage, linkStorage } from "@/storage/link-storage";

export default function Index() {
  const [links, setLinks] = useState<LinkStorage[]>([]);
  // Inicializa com a categoria "Todos" (primeira da lista)
  const [category, setCategory] = useState(categories[0].name);
  const [showModal, setShowModal] = useState(false);
  const [selectedLink, setSelectedLink] = useState<LinkStorage | null>(null);
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedLinks, setSelectedLinks] = useState<string[]>([]);

  async function getLinks() {
    try {
      const links = await linkStorage.getLinks();

      // Se a categoria for "Todos", mostra todos os links, caso contrário filtra por categoria
      const filteredLinks = category === "Todos"
        ? links
        : links.filter((item: LinkStorage) => item.category === category);

      setLinks(filteredLinks);
    } catch (error) {
      console.log(error);
    }
  }

  function handleLinkPress(link: LinkStorage) {
    setSelectedLink(link);
    setShowModal(true);
  }

  function toggleLinkSelection(linkId: string) {
    setSelectedLinks(prev => {
      if (prev.includes(linkId)) {
        return prev.filter(id => id !== linkId);
      } else {
        return [...prev, linkId];
      }
    });
  }

  function toggleSelectionMode() {
    setSelectionMode(prev => !prev);
    if (selectionMode) {
      // Saindo do modo de seleção, limpa os links selecionados
      setSelectedLinks([]);
    }
  }

  async function handleDelete(link: LinkStorage) {
    Alert.alert("Excluir", "Deseja excluir este link?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Excluir",
        onPress: () => deleteLink(link),
      },
    ]);
  }

  async function deleteLink(link: LinkStorage) {
    try {
      await linkStorage.deleteLink(link);
      setShowModal(false);
      getLinks();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteSelected() {
    if (selectedLinks.length === 0) return;

    Alert.alert(
      "Excluir selecionados",
      `Deseja excluir ${selectedLinks.length} link${selectedLinks.length > 1 ? 's' : ''}?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          onPress: deleteSelectedLinks,
        },
      ]
    );
  }

  async function deleteSelectedLinks() {
    try {
      await linkStorage.deleteMultipleLinks(selectedLinks);
      setSelectedLinks([]);
      setSelectionMode(false);
      getLinks();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleOpenLink(url: string) {
    try {
      // Verifica se a URL começa com http:// ou https://
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
      }

      await WebBrowser.openBrowserAsync(url);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível abrir o link. Verifique se a URL está correta.");
    }
  }

  // Atualiza a lista de links quando a tela recebe foco ou quando a categoria muda
  useFocusEffect(
    useCallback(() => {
      getLinks();
    }, [category])
  );

  return (
    <View style={styles.container}>
      <Header
        selectionMode={selectionMode}
        hasSelectedItems={selectedLinks.length > 0}
        currentCategory={category}
        onToggleSelectionMode={toggleSelectionMode}
        onDeleteSelected={handleDeleteSelected}
      />

      <Categories selected={category} onChange={setCategory} />

      <FlatList
        data={links}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Link
            name={item.name}
            url={item.url}
            category={item.category}
            showCategory={category === "Todos"} // Mostra a categoria apenas quando estiver na visualização "Todos"
            onDetails={() => handleLinkPress(item)}
            selectionMode={selectionMode}
            isSelected={selectedLinks.includes(item.id)}
            onSelect={() => toggleLinkSelection(item.id)}
          />
        )}
        ListEmptyComponent={EmptyList}
        style={styles.links}
        contentContainerStyle={[
          styles.linksContent,
          links.length === 0 && { flex: 1, justifyContent: 'center' }
        ]}
        showsVerticalScrollIndicator={false}
      />

      <LinkDetails
        visible={showModal}
        link={selectedLink}
        onClose={() => setShowModal(false)}
        onDelete={handleDelete}
        onOpen={handleOpenLink}
      />
    </View>
  );
}

