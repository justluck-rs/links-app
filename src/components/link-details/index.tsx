import React from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from './style';
import { colors } from '@/styles/colors';
import { Option } from '@/components/option';
import { LinkStorage } from '@/storage/link-storage';
import { categories } from '@/utils/categories';

type LinkDetailsProps = {
  visible: boolean;
  link: LinkStorage | null;
  onClose: () => void;
  onDelete: (link: LinkStorage) => void;
  onOpen: (url: string) => void;
};

export function LinkDetails({ visible, link, onClose, onDelete, onOpen }: LinkDetailsProps) {
  if (!link) return null;

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modal}>
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <View style={styles.content}>
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Detalhes</Text>
                <TouchableOpacity onPress={onClose}>
                  <MaterialIcons name="close" size={20} color={colors.gray[400]} />
                </TouchableOpacity>
              </View>
              
              <View style={styles.body}>
                <Text style={styles.title}>{link.name}</Text>
                <Text style={styles.url}>{link.url}</Text>
                
                <View style={styles.categoryContainer}>
                  <MaterialIcons
                    name={categories.find(cat => cat.name === link.category)?.icon || "folder"}
                    size={20}
                    color={colors.green[300]}
                  />
                  <Text style={styles.categoryText}>{link.category}</Text>
                </View>
                
                <Text style={styles.info}>
                  ID: {link.id}
                </Text>
              </View>
              
              <View style={styles.options}>
                <Option
                  name="Excluir"
                  icon="delete"
                  variant="secondary"
                  onPress={() => onDelete(link)}
                />
                <Option
                  name="Abrir"
                  icon="open-in-new"
                  onPress={() => onOpen(link.url)}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
