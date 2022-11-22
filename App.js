//Inicio Importar pantallas
import Clientes from "./src/pantallas/Clientes/Clientes";
import Roles from "./src/pantallas/Roles/Roles";
import Inicio from "./src/pantallas/Inicio";
//Fin Importar pantallas

//Inicio importar librerías
import { NativeBaseProvider } from "native-base";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
//Fin importar librerías

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer initialRouteName="Inicio">
        <Drawer.Navigator>
          <Drawer.Screen name="Inicio" component={Inicio} />
          <Drawer.Screen name="Roles" component={Roles} />
          <Drawer.Screen name="Clientes" component={Clientes} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
