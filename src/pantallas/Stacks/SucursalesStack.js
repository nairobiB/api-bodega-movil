import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Sucursales from "../Sucursales/Sucursales";
import Crudsucursales from "../Sucursales/Crudsucursales";
import Editarsucursales from "../Sucursales/Editarsucursal"

const Stack = createStackNavigator();
export default function SucursalesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sucursales"
        component={Sucursales}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="crudsucursales"
        component={Crudsucursales}
        options={{ title: "Nuevo" }}
      />
      <Stack.Screen
        name="editar"
        component={Editarsucursales}
        options={{ title: "Modificación" }}
      />
    </Stack.Navigator>
  );
}

