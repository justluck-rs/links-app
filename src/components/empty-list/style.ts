import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.gray[200],
    marginTop: 16,
    marginBottom: 8,
  },
  
  text: {
    fontSize: 14,
    color: colors.gray[400],
    textAlign: 'center',
    lineHeight: 22,
  },
});
