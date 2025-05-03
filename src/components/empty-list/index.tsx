import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from './style';
import { colors } from '@/styles/colors';

export function EmptyList() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="link-off" size={56} color={colors.gray[400]} />
      <Text style={styles.title}>Nenhum link encontrado</Text>
      <Text style={styles.text}>
        Adicione um novo link clicando no botão "+" no topo da tela ou tente mudar a categoria.
      </Text>
    </View>
  );
}
