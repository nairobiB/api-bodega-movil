import Login from "./src/pantallas/Login";
import { NativeBaseProvider } from "native-base";
export default function App() {
  return (
    <NativeBaseProvider>
      <Login></Login>
    </NativeBaseProvider>
  );
}
