import Personal from "./src/pantallas/Personal/Personal";
import Crudpersonal from "./src/pantallas/Personal/Crudpersonal";
import Login from "./src/pantallas/Login";
import Clientes from "./src/pantallas/Clientes/Clientes";
import CrudClientes from "./src/pantallas/Clientes/Crudclientes";

import { NativeBaseProvider } from "native-base";
export default function App() {
  return (
    <NativeBaseProvider>
      <Crudpersonal></Crudpersonal>
    </NativeBaseProvider>
  );
}
