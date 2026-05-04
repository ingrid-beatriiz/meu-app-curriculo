import { View, Text, StyleSheet } from 'react-native';

export default function Academico() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Estudante de Sistemas para Internet na UNICAP.</Text>
    </View>
  );
}
const styles = StyleSheet.create({ container: { flex: 1, padding: 20 }, text: { fontSize: 16 } });