import Login from "./src/pantallas/Login";
import Clientes from "./src/pantallas/Clientes";
import CrudClientes from "./src/pantallas/Crudclientes";

import { NativeBaseProvider } from "native-base";
export default function App() {
  return (
    
    <NativeBaseProvider>
      <CrudClientes></CrudClientes>
    </NativeBaseProvider>
  );
}
