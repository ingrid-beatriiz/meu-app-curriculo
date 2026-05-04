import { View, Text, StyleSheet } from 'react-native';

export default function Profissional() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Estagiária em Desenvolvimento de Software no Banco Bradesco.</Text>
    </View>
  );
}
const styles = StyleSheet.create({ container: { flex: 1, padding: 20 }, text: { fontSize: 16 } });