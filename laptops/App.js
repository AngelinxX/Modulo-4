import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LaptopsList } from "./screens/LaptopsList";
import { LaptopsForm } from "./screens/LaptopsForm";

export default function App() {
  const Stackcontacts = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stackcontacts.Navigator initialRouteName="ListaLaptops">
        <Stackcontacts.Screen
          name="ListaLaptops"
          component={LaptopsList}
        />
        <Stackcontacts.Screen
          name="IngresoLaptops"
          component={LaptopsForm}
        />
      </Stackcontacts.Navigator>
    </NavigationContainer>
  );
}

