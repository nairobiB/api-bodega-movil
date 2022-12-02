//Inicio Importar pantallas
import Clientes from "../pantallas/Clientes/Clientes";
import Roles from "../pantallas/Roles/Roles";
import Inicio from "../pantallas/Inicio";
import Personal from "../pantallas/Personal/Personal";
import Entradas from "../pantallas/Entradas/Entradas";
import Salidas from "../pantallas/Salidas/Salidas";
import Productos from "../pantallas/Productos/Productos";
import Usuarios from "../pantallas/Usuarios/Usuarios";
import Sucursales from "../pantallas/Sucursales/Sucursales";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
import Login from "../pantallas/Login";
//Fin Importar pantallas

const Hamburger = () => {
  return (
    <NavigationContainer initialRouteName="Inicio" independent={"true"}>
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
  );
};
export default Hamburger;
