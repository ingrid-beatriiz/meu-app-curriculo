import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingrid Beatriz</Text>
      <Text style={styles.subtitle}>Desenvolvedora Back-end</Text>

      <Link href="/sobre" asChild>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Sobre Mim</Text></Pressable>
      </Link>
      
      <Link href="/academico" asChild>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Experiência Acadêmica</Text></Pressable>
      </Link>

      <Link href="/profissional" asChild>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Experiência Profissional</Text></Pressable>
      </Link>

      <Link href="/projetos" asChild>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Meus Projetos</Text></Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 5 },
  subtitle: { fontSize: 16, textAlign: 'center', color: '#666', marginBottom: 40 },
  button: { backgroundColor: '#007BFF', padding: 15, borderRadius: 8, marginVertical: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});