import Navegacion from "./src/componentes/Navegacion";
//Inicio importar librerías
import { NativeBaseProvider } from "native-base";

//Fin importar librerías

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <NavigationContainer initialRouteName="Inicio">
        <Drawer.Navigator>
          <Drawer.Screen name="Inicio" component={Inicio} />
          <Drawer.Screen name="Entradas" component={Entradas} />
          <Drawer.Screen name="Salidas" component={Salidas} />
          <Drawer.Screen name="Productos" component={Productos} />
          <Drawer.Screen name="Roles" component={Roles} />
          <Drawer.Screen name="Clientes" component={Clientes} />
          <Drawer.Screen name="Sucursales" component={Sucursales} />
          <Drawer.Screen name="Personal" component={Personal} />
          <Drawer.Screen name="Usuarios" component={Usuarios} />
        </Drawer.Navigator>
      </NavigationContainer>
      <Login></Login>*/}
      <Navegacion></Navegacion>
    </NativeBaseProvider>
  );
}
