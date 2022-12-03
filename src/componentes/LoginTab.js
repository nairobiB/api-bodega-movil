import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pantallas/Login";
import EnviarCorreo from "../pantallas/EnviarCorreo";

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
          <Stack.Screen name="EnviarCorreo" component={EnviarCorreo} />
          {/* <Stack.Screen name="NuevaContrasena" component={NuevaContrasena} /> */}
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginTab;
