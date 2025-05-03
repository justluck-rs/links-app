import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { styles } from './style';
import { colors } from '@/styles/colors';

type HeaderProps = {
  selectionMode: boolean;
  hasSelectedItems: boolean;
  currentCategory: string;
  onToggleSelectionMode: () => void;
  onDeleteSelected: () => void;
};

export function Header({
  selectionMode,
  hasSelectedItems,
  currentCategory,
  onToggleSelectionMode,
  onDeleteSelected
}: HeaderProps) {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />
      <View style={styles.actions}>
        {selectionMode ? (
          <>
            <TouchableOpacity onPress={onToggleSelectionMode} style={styles.button}>
              <MaterialIcons name="close" size={28} color={colors.gray[400]} />
            </TouchableOpacity>
            {hasSelectedItems && (
              <TouchableOpacity onPress={onDeleteSelected} style={styles.button}>
                <MaterialIcons name="delete" size={28} color={colors.gray[400]} />
              </TouchableOpacity>
            )}
          </>
        ) : (
          <>
            <TouchableOpacity onPress={onToggleSelectionMode} style={styles.button}>
              <MaterialIcons name="select-all" size={28} color={colors.gray[400]} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.navigate({
                pathname: "/add",
                params: { category: currentCategory }
              })}
              style={styles.button}
            >
              <MaterialIcons name="add" size={32} color={colors.green[300]} />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}
