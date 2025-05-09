import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./style";
import { colors } from "@/styles/colors";

type OptionProps = TouchableOpacityProps & {
  name: string
  icon: keyof typeof MaterialIcons.glyphMap
  variant?: "primary" | "secondary"
};

export function Option({ name, icon, variant = "primary", ...rest }: OptionProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
    >
      <MaterialIcons
        name={icon}
        size={20}
        color={variant === "primary" ? colors.green[300] : colors.gray[400]}
      />
      <Text style={variant === "primary" ? styles.primaryTitle : styles.secondaryTitle}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

