import { View, Text, StyleSheet, Pressable, Share, Linking } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {

  const onShare = async () => {
    try {
      await Share.share({
        message: 'Confira o portfólio de Ingrid Beatriz, Desenvolvedora Back-end! Acesse o meu GitHub: https://github.com/ingrid-beatriiz',
      });
    } catch (error: any) {
      console.error(error.message);
    }
  };

  // Funcionalidade Extra 2: Abertura de links externos
  const openGitHub = () => Linking.openURL('https://github.com/ingrid-beatriiz');
  const openEmail = () => Linking.openURL('mailto:ingridbeatriz_1@outlook.com');

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

      <View style={styles.divisor} />
      
      <Text style={styles.extraTitle}>Contato & Compartilhamento</Text>
      
      <View style={styles.row}>
        <Pressable style={styles.actionButton} onPress={openGitHub}>
          <Text style={styles.actionText}>GitHub</Text>
        </Pressable>
        
        <Pressable style={styles.actionButton} onPress={openEmail}>
          <Text style={styles.actionText}>E-mail</Text>
        </Pressable>
      </View>

      <Pressable style={[styles.actionButton, styles.shareButton]} onPress={onShare}>
        <Text style={styles.shareText}>Compartilhar Portfólio</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 5 },
  subtitle: { fontSize: 16, textAlign: 'center', color: '#666', marginBottom: 30 },
  
  button: { backgroundColor: '#007BFF', padding: 15, borderRadius: 8, marginVertical: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  
  divisor: { height: 1, backgroundColor: '#ddd', marginVertical: 20 },
  extraTitle: { fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: '#888', marginBottom: 15, textTransform: 'uppercase' },
  
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  actionButton: { flex: 1, backgroundColor: '#e0e0e0', padding: 12, borderRadius: 8, marginHorizontal: 5, alignItems: 'center' },
  actionText: { color: '#333', fontSize: 14, fontWeight: 'bold' },
  
  shareButton: { backgroundColor: '#28a745', marginTop: 5 },
  shareText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});