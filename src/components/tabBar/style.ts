import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  tabBar: {
    width: 390,
    height: 71,
    backgroundColor: '#2D2D2D',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 0,
  },
  tabContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  tabImage: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  tabText: {
    color: '#FFFFFF',
    marginTop: 8,
  },
});