import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: colors.gray[900] + "99",
    justifyContent: "flex-end",
  },

  content: {
    backgroundColor: colors.gray[950],
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.gray[100],
  },

  body: {
    gap: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.gray[100],
  },

  url: {
    fontSize: 14,
    color: colors.gray[400],
  },
  
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 8,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.gray[800],
  },
  
  categoryText: {
    fontSize: 14,
    color: colors.green[300],
    fontWeight: "500",
  },
  
  info: {
    fontSize: 12,
    color: colors.gray[500],
    marginTop: 4,
  },

  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
    paddingVertical: 14,
  },
});
