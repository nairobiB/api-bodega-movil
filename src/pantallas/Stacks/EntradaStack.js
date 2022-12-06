import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Entrada from "../Entradas/Entradas";
import CrudEntrada from "../Entradas/Crudentradas";
import DetEntrada from "../Entradas/DetallesEntrada";
import Guardar from "../Entradas/Guardar";
const Stack = createStackNavigator();
export default function EntradaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Entradas"
        component={Entrada}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="crudEntrada"
        component={CrudEntrada}
        options={{ title: "Entrada" }}
      />
        <Stack.Screen
        name="guardarEntrada"
        component={Guardar}
        options={{ title: "Nuevo" }}
      />
        <Stack.Screen
        name="detEntrada"
        component={DetEntrada}
        options={{ title: "Detalles de entrada" }}
      />
    </Stack.Navigator>
  );
}
