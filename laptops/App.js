import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ContactsList } from "./screens/LaptopsList";

export default function App() {
  const Stackcontacts = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stackcontacts.Navigator>
        <Stackcontacts.Screen
          name="ContactListNav"
          component={ContactsList}
        />
      </Stackcontacts.Navigator>
    </NavigationContainer>
  );
}

