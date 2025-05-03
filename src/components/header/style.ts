import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  
  logo: {
    width: 38,
    height: 32,
  },
  
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  
  button: {
    padding: 4,
  },
});
