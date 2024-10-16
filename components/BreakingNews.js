import { StyleSheet, Text, View } from 'react-native';

export default function BreakingNews() {
  return (
    <View style={styles.container}>
      <Text>Tuoreimmat Uutiset tässä</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
