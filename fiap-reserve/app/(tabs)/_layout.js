import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#F23064', tabBarStyle: {backgroundColor: "#262626"}, headerStyle: {backgroundColor: "#262626"}, headerTintColor: "#ffff", headerTitleStyle: {fontWeight: "bold"}}}>
        <Tabs.Screen
            name="salas"
            options={{
            title: 'Salas',
            tabBarIcon: ({ color }) => <Ionicons name="business-outline" size={24} color={color} />}}
        />
        <Tabs.Screen
            name="reservar"
            options={{
            title: 'Reservar',
            tabBarIcon: ({ color }) => <Ionicons name="calendar-outline" size={24} color={color} />}}
        />
        <Tabs.Screen
            name="minhas-reservas"
            options={{
            title: 'Minhas Reservas',
            tabBarIcon: ({ color }) => <Ionicons name="list-outline" size={24} color={color} />}}
        />
    </Tabs>
  );
}