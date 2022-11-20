import Estilos from "../componentes/Estilos";
import { Text, ScrollView, ImageBackground, View } from "react-native";
import login from "../../assets/login.jpg";
export default function App() {
  return (
    <ScrollView style={Estilos.container} showsVerticalScrollIndicator={false}>
      <ImageBackground source={login} style={Estilos.imagenLogin}>
        <View style={Estilos.firstView}>
          <Text style={Estilos.textoTitulo}>Inicio de Sesión</Text>
        </View>
      </ImageBackground>
      {/* View secundario */}
      <View>
        {/* Bienvenida */}
        <View style={Estilos.secundario}></View>
      </View>
    </ScrollView>
  );
}
