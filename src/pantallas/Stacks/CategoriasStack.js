import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Categorias from "../Categorias/Categorias";
import CrudCategorias from "../Categorias/CrudCategorias";
import EditarCategoria from "../Categorias/EditarCategoria";

const Stack = createStackNavigator();
export default function ClientesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categorias"
        component={Categorias}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="CrudCategorias"
        component={CrudCategorias}
        options={{ title: "Nuevo" }}
      />
      <Stack.Screen
        name="EditarCategoria"
        component={EditarCategoria}
        options={{ title: "Editar" }}
      />
    </Stack.Navigator>
  );
}
