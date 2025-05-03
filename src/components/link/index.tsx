import { Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./style";
import { colors } from "@/styles/colors";

type LinkProps = {
  name: string;
  url: string;
  category?: string;
  showCategory?: boolean;
  onDetails: () => void;
  isSelected?: boolean;
  onSelect?: () => void;
  selectionMode?: boolean;
};

export function Link({
  name,
  url,
  category,
  showCategory = false,
  onDetails,
  isSelected = false,
  onSelect,
  selectionMode = false
}: LinkProps) {
  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.selectedContainer]}
      onPress={selectionMode ? onSelect : onDetails}
      activeOpacity={0.7}
    >
      {selectionMode && (
        <MaterialIcons
          name={isSelected ? "check-box" : "check-box-outline-blank"}
          size={24}
          color={isSelected ? colors.green[300] : colors.gray[400]}
        />
      )}

      <View style={styles.details}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <Text style={styles.url} numberOfLines={1}>{url}</Text>

        {showCategory && category && (
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        )}
      </View>

      {!selectionMode && (
        <TouchableOpacity onPress={onDetails}>
          <MaterialIcons name="more-horiz" verticalAlign="middle" size={24} color={colors.gray[400]} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}