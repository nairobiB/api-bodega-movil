import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Personal from "../Personal/Personal";
import CrudPersonal from "../Personal/Crudpersonal";
import Editarpersonal from "../Personal/Editarpersonal";
const Stack = createStackNavigator();
export default function PersonalStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Personal"
        component={Personal}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="crudpersonal"
        component={CrudPersonal}
        options={{ title: "Nuevo" }}
      />
      <Stack.Screen
        name="editarpersonal"
        component={Editarpersonal}
        options={{ title: "Modificación" }}
      />
    </Stack.Navigator>
  );
}
