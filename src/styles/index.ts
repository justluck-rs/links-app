import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
  },

  links: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
  },

  linksContent: {
    gap: 20,
    padding: 24,
    paddingBottom: 100,
  },
});
