import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: '#1E1E1E' }, headerTintColor: '#fff' }}>
      <Stack.Screen name="index" options={{ title: 'Início' }} />
      <Stack.Screen name="sobre" options={{ title: 'Sobre Mim' }} />
      <Stack.Screen name="academico" options={{ title: 'Exp. Acadêmica' }} />
      <Stack.Screen name="profissional" options={{ title: 'Exp. Profissional' }} />
      <Stack.Screen name="projetos" options={{ title: 'Projetos' }} />
    </Stack>
  );
}