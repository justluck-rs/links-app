import { useState } from "react";

import { Alert, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "@/styles/add";
import { colors } from "@/styles/colors";
import { router, useLocalSearchParams } from "expo-router";

import { Input } from "@/components/input";
import { Categories } from "@/components/categories";
import { Button } from "@/components/button";
import { linkStorage } from "@/storage/link-storage";

export default function Add() {
  const params = useLocalSearchParams();
  const initialCategory = params.category as string || "";

  const [category, setCategory] = useState(initialCategory);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  async function handleAdd() {
    if (!url.trim() || !name.trim() || !category) {
      Alert.alert("Aviso", "Preencha todos os campos");
      return;
    }

    try {
      await linkStorage.createLink({
        id: String(new Date().getTime()),
        name,
        url,
        category,
      });

      Alert.alert("Sucesso", "Link adicionado com sucesso", [
        {
          text: "Ok",
          onPress: () => router.back(),
        },
      ]);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível adicionar o link. Tente novamente.");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>

        <Text style={styles.title}>Novo</Text>
      </View>

      <Text style={styles.label}>Selecione uma categoria</Text>
      <Categories selected={category} onChange={setCategory} />
      <View style={styles.form}>
        <Input placeholder="Nome" onChangeText={setName} autoCorrect={false} autoCapitalize="none" />
        <Input placeholder="Url" onChangeText={setUrl} autoCorrect={false} autoCapitalize="none" />
        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  )
}