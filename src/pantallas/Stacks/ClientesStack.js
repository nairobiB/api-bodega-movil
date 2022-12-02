import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Clientes from "../Clientes/Clientes"
import CrudClientes from "../Clientes/Crudclientes"

const Stack = createStackNavigator();
export default function ClientesStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="clientes" component={Clientes} />
            <Stack.Screen name="crud"
             component={CrudClientes}
            options={{title:"Nuevo"}} />
        </Stack.Navigator>
    );
}