import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { sql } from '../lib/db';

interface Profissional { id: number; cargo: string; empresa: string; descricao: string; }

export default function ProfissionalScreen() {
  const [profissional, setProfissional] = useState<Profissional[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sql`SELECT * FROM profissional`
      .then((data: any) => { setProfissional(data); setLoading(false); })
      .catch(error => { console.error('Erro:', error); setLoading(false); });
  }, []);

  if (loading) return <View style={styles.container}><ActivityIndicator size="large" color="#0000ff" /></View>;

  return (
    <View style={styles.container}>
      <FlatList
        data={profissional}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cargo}>{item.cargo}</Text>
            <Text style={styles.empresa}>{item.empresa}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 15, elevation: 2 },
  cargo: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  empresa: { fontSize: 16, color: '#007BFF', marginBottom: 5 },
  descricao: { fontSize: 14, color: '#444', lineHeight: 20 }
});