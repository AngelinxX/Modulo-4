import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { InstitucionList } from "./screens/institucionList";
import { InstitucionForm } from "./screens/institucionForm";

export default function App() {
  const StackInstitucion = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackInstitucion.Navigator initialRouteName="institucionListNav">
        <StackInstitucion.Screen name="institucionListNav"
          component={InstitucionList}
        />
        <StackInstitucion.Screen name="institucionFormNav"
          component={InstitucionForm}
        />
      </StackInstitucion.Navigator>
    </NavigationContainer>
  );
}

