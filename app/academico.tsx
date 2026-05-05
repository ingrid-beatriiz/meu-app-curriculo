import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { sql } from '../lib/db';

interface Academico { id: number; curso: string; instituicao: string; periodo: string; }

export default function AcademicoScreen() {
  const [academico, setAcademico] = useState<Academico[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sql`SELECT * FROM academico`
      .then((data: any) => { setAcademico(data); setLoading(false); })
      .catch(error => { console.error('Erro:', error); setLoading(false); });
  }, []);

  if (loading) return <View style={styles.container}><ActivityIndicator size="large" color="#0000ff" /></View>;

  return (
    <View style={styles.container}>
      <FlatList
        data={academico}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.curso}>{item.curso}</Text>
            <Text style={styles.instituicao}>{item.instituicao}</Text>
            <Text style={styles.periodo}>Período: {item.periodo}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 15, elevation: 2 },
  curso: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  instituicao: { fontSize: 16, color: '#007BFF', marginBottom: 5 },
  periodo: { fontSize: 14, color: '#666' }
});