import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Producto from "../Productos/Productos"
import CrudProducto from "../Productos/Crudproductos"

const Stack = createStackNavigator();
export default function ProductosStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="productos" component={Producto} />
            <Stack.Screen name="crud"
             component={CrudProducto}
            options={{title:"Nuevo"}} />
        </Stack.Navigator>
    );
}