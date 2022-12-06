import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Usuarios from "../Usuarios/Usuarios";
import CrudUsuarios from "../Usuarios/Crudusuarios";
import EditarUsuario from "../Usuarios/EditarUsuario";

const Stack = createStackNavigator();
export default function UsuariosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Usuarios"
        component={Usuarios}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="crudusuarios"
        component={CrudUsuarios}
        options={{ title: "Nuevo" }}
      />
      <Stack.Screen
        name="editarUsuario"
        component={EditarUsuario}
        options={{ title: "Modificación" }}
      />
    </Stack.Navigator>
  );
}