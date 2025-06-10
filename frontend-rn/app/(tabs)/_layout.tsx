import { Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: "white", tabBarActiveBackgroundColor: "coral"}}>
      <Tabs.Screen name="index" options={{title:"Home", tabBarIcon: ({color}) => (<Entypo name="home" size={24} color={color} />),}} />
      <Tabs.Screen name="bookings" options={{title:"Bookings", tabBarIcon: ({color}) => (<Ionicons name="briefcase-outline" size={24} color={color} />),}} />
      <Tabs.Screen name="wallet" options={{title:"Wallet", tabBarIcon: ({color}) => (<MaterialCommunityIcons name="wallet-outline" size={24} color={color} />),}} />
      <Tabs.Screen name="profile" options={{title:"Profile", tabBarIcon: ({color}) => (<Ionicons name="person-outline" size={24} color={color} />),}} />
    </Tabs>
  );
}
