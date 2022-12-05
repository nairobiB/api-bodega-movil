import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Salida from "../Salidas/Salidas";
import CrudSalida from "../Salidas/CrudSalidas";
import DetSalida from "../Salidas/DetallesSalida";

const Stack = createStackNavigator();
export default function EntradaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Salidas"
        component={Salida}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="CrudSalida"
        component={CrudSalida}
        options={{ title: "Nuevo" }}
      />
        <Stack.Screen
        name="Detalle Salida"
        component={DetSalida}
        options={{ title: "Detalles de Salidas" }}
      />
    </Stack.Navigator>
  );
}
