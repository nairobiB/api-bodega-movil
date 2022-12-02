import ListaUsuarios from "../pantallas/ListaUsuarios";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pantallas/Login";
import Pin from "../pantallas/Pin";
import NuevaContrasena from "../pantallas/NuevaContrasena";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const LoginTab = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Pin" component={Pin} />
          {/* <Stack.Screen name="NuevaContrasena" component={NuevaContrasena} /> */}
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginTab;
