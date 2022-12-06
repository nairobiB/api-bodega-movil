//Inicio Importar pantallas
import Clientes from "../pantallas/Stacks/ClientesStack";
import Roles from "../pantallas/Stacks/RolesStack";
import Inicio from "../pantallas/Inicio";
import Personal from "../pantallas/Stacks/PersonalStack";
import Entradas from "../pantallas/Stacks/EntradaStack";
import Salidas from "../pantallas/Stacks/SalidasStack";
import Productos from "../pantallas/Stacks/ProductosStack";
import Usuarios from "../pantallas/Stacks/UsuariosStack";
import Sucursales from "../pantallas/Stacks/SucursalesStack";
import Perfil from "../pantallas/Perfil";
import Categorias from "../pantallas/Stacks/CategoriasStack";
import Secciones from "../pantallas/Stacks/SeccionesStack";
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
        <Drawer.Screen name="Cerrar Sesión" component={Perfil} />
        <Drawer.Screen name="Gestión Entradas" component={Entradas} />
        <Drawer.Screen name="Gestión Salidas" component={Salidas} />
        <Drawer.Screen name="Gestión Productos" component={Productos} />
        <Drawer.Screen name="Gestión Roles" component={Roles} />
        <Drawer.Screen name="Gestión Clientes" component={Clientes} />
        <Drawer.Screen name="Gestión Sucursales" component={Sucursales} />
        <Drawer.Screen name="Gestión Personal" component={Personal} />
        <Drawer.Screen name="Gestión Usuarios" component={Usuarios} />
        <Drawer.Screen name="Gestión Secciones" component={Secciones} />
        <Drawer.Screen name="Gestión Categorias" component={Categorias} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default Hamburger;
