import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Roles from "../Roles/Roles";
import Crudroles from "../Roles/Crudroles";
import editar from "../Roles/Editarrol";

const Stack = createStackNavigator();
export default function RolesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Roles" component={Roles} options={{ title: "" }} />
      <Stack.Screen
        name="crudroles"
        component={Crudroles}
        options={{ title: "Nuevo" }}
      />
      <Stack.Screen
        name="editar"
        component={editar}
        options={{ title: "Editar" }}
      />
    </Stack.Navigator>
  );
}
