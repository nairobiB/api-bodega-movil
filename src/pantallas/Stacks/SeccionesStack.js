import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Secciones from "../Secciones/Secciones";
import CrudSecciones from "../Secciones/CrudSecciones";
import EditarSeccion from "../Secciones/EditarSeccion";

const Stack = createStackNavigator();
export default function ClientesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Secciones"
        component={Secciones}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="CrudSeccion"
        component={CrudSecciones}
        options={{ title: "Nuevo" }}
      />
      <Stack.Screen
        name="EditarSeccion"
        component={EditarSeccion}
        options={{ title: "Editar" }}
      />
    </Stack.Navigator>
  );
}
