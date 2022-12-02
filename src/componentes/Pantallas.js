import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pantallas/Login";
import Inicio from "../pantallas/Inicio";
import UsuarioContext from "../contexto/UsuarioContext";
import Cargando from "./Cargando";

const Stack = createNativeStackNavigator();

const Pantallas = () => {
  const { aplicacionIniciada, setDatos, sesionIniciada } =
    React.useContext(UsuarioContext);
  setDatos();
  if (aplicacionIniciada) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {sesionIniciada ? (
          <>
            <Stack.Screen name="Inicio" component={Inicio} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
          </>
        )}
      </Stack.Navigator>
    );
  } else {
    return <Cargando texto="Cargando aplicación" />;
  }
};
export default Pantallas;
