import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Producto from "../Productos/Productos";
import CrudProducto from "../Productos/Crudproductos";
import Editarproducto from "../Productos/EditarProducto";
const Stack = createStackNavigator();
export default function ProductosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Productos"
        component={Producto}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="crudproductos"
        component={CrudProducto}
        options={{ title: "Nuevo" }}
      />
      <Stack.Screen
        name="editar"
        component={Editarproducto}
        options={{ title: "Editar" }}
      />
    </Stack.Navigator>
  );
}
