import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Clientes from "../Clientes/Clientes";
import CrudClientes from "../Clientes/Crudclientes";
import Editarclientes from "../Clientes/Editarclientes"

const Stack = createStackNavigator();
export default function ClientesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Clientes"
        component={Clientes}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="crud"
        component={CrudClientes}
        options={{ title: "Nuevo" }}
      />
      <Stack.Screen
        name="editar"
        component={Editarclientes}
        options={{ title: "Modificar" }}
      />
    </Stack.Navigator>
  );
}
