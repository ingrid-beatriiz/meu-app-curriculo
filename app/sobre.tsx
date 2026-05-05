import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';

interface Perfil {
  id: number;
  nome: string;
  titulo: string;
  resumo: string;
}

export default function Sobre() {
  const [perfil, setPerfil] = useState<Perfil | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/dados')
      .then(response => response.json())
      .then(data => {
        setPerfil(data.perfil);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar perfil:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <View style={styles.container}><ActivityIndicator size="large" color="#0000ff" /></View>;
  }

  return (
    <View style={styles.container}>
      {perfil && (
        <View style={styles.card}>
          <Text style={styles.nome}>{perfil.nome}</Text>
          <Text style={styles.titulo}>{perfil.titulo}</Text>
          <Text style={styles.resumo}>{perfil.resumo}</Text>
          
          <View style={styles.divisor} />
          
          <Text style={styles.techTitle}>Tecnologias Utilizadas no App:</Text>
          <Text style={styles.resumo}>• React Native & Expo</Text>
          <Text style={styles.resumo}>• Expo Router (Navegação)</Text>
          <Text style={styles.resumo}>• NeonDB / PostgreSQL (Banco de Dados)</Text>
          <Text style={styles.resumo}>• API Routes do Expo</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 8, elevation: 2 },
  nome: { fontSize: 22, fontWeight: 'bold', marginBottom: 5 },
  titulo: { fontSize: 16, color: '#007BFF', marginBottom: 15 },
  resumo: { fontSize: 15, color: '#444', lineHeight: 22 },
  divisor: { height: 1, backgroundColor: '#ddd', marginVertical: 15 },
  techTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 }
});