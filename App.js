//Inicio Importar pantallas
import Clientes from "./src/pantallas/Clientes/Clientes";
import Roles from "./src/pantallas/Roles/Roles";
import Inicio from "./src/pantallas/Inicio";
import Personal from "./src/pantallas/Personal/Personal";
import Entradas from "./src/pantallas/Entradas/Entradas";
import Productos from "./src/pantallas/Productos/Productos";
import Usuarios from "./src/pantallas/Usuarios/Usuarios";
import Login from "./src/pantallas/Login";
//Fin Importar pantallas
import Navegacion from "./src/componentes/Navegacion";
//Inicio importar librerías
import { NativeBaseProvider } from "native-base";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
//Fin importar librerías

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <NavigationContainer initialRouteName="Inicio">
        <Drawer.Navigator>
          <Drawer.Screen name="Inicio" component={Inicio} />
          <Drawer.Screen name="Entradas" component={Entradas} />
          <Drawer.Screen name="Productos" component={Productos} />
          <Drawer.Screen name="Roles" component={Roles} />
          <Drawer.Screen name="Clientes" component={Clientes} />
          <Drawer.Screen name="Personal" component={Personal} />
          <Drawer.Screen name="Usuarios" component={Usuarios} />
        </Drawer.Navigator>
      </NavigationContainer> 
      <Login></Login>*/}
      <Navegacion></Navegacion>
    </NativeBaseProvider>
  );
}
