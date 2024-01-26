import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ContactsList } from "./screens/ContactsList";
import { ContactsForm } from "./screens/ContactsFrom";

export default function App() {
  const Stackcontacts = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stackcontacts.Navigator initialRouteName="ContactListNav">
        <Stackcontacts.Screen
          name="ContactListNav"
          component={ContactsList}
        />
        <Stackcontacts.Screen
          name="ContactsFormNav"
          component={ContactsForm}
        />
      </Stackcontacts.Navigator>
    </NavigationContainer>
  );
}

