import { View, Text, StyleSheet } from 'react-native';

export default function Projetos() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aqui listaremos seus projetos via NeonDB.</Text>
    </View>
  );
}
const styles = StyleSheet.create({ container: { flex: 1, padding: 20 }, text: { fontSize: 16 } });