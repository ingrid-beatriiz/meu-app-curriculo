import { View, Text, StyleSheet } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sou apaixonada por desenvolvimento de software, com foco em Java, Spring Boot e Arquitetura Hexagonal. (Aqui detalharemos as tecnologias do App depois!)</Text>
    </View>
  );
}
const styles = StyleSheet.create({ container: { flex: 1, padding: 20 }, text: { fontSize: 16 } });