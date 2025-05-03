import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    gap: 12,
    padding: 8,
    borderRadius: 8,
  },

  selectedContainer: {
    backgroundColor: colors.gray[800],
  },

  details: {
    flex: 1,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.gray[100],
  },

  url: {
    fontSize: 14,
    color: colors.gray[400],
  },

  categoryBadge: {
    backgroundColor: colors.gray[800],
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 4,
  },

  categoryText: {
    fontSize: 12,
    color: colors.green[300],
    fontWeight: "500",
  },
});
