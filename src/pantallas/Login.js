import Estilos from "../componentes/Estilos";
import { Text, ScrollView, ImageBackground, View } from "react-native";
import { Icon, Input, Button } from "native-base";
import { Ionicons, Entypo } from "@expo/vector-icons";
import login from "../../assets/login.jpg";
export default function App() {
  return (
    //Header
    <ScrollView style={Estilos.container} showsVerticalScrollIndicator={false}>
      <ImageBackground source={login} style={Estilos.imagenLogin}>
        <View style={Estilos.firstView}>
          <Icon as={Ionicons} name="person" size={65} color={"white"} />
          <Text style={Estilos.textoTitulo}>Inicio de Sesión</Text>
        </View>
      </ImageBackground>
      {/* View Bottom */}
      <View style={Estilos.bottomView}>
        {/* Bienvenida */}
        <View style={{ padding: 40 }}>
          <Text style={Estilos.textoInicio}>Bienvenido</Text>
          <Text style={{ fontSize: 18, marginTop: 5, fontStyle: "italic" }}>
            Por favor, ingrese sus datos
          </Text>
          {/* Entrada de datos */}
          <View style={{ marginTop: 50 }}>
            {/* Usuario */}
            <Text style={Estilos.labelLogin}>Usuario</Text>
            <Input
              placeholder="Ingrese su usuario"
              size="xl"
              style={{ marginTop: 5 }}
              InputLeftElement={
                <Icon
                  as={<Ionicons name="person" />}
                  size={5}
                  ml="3"
                  color="muted.400"
                />
              }
            ></Input>

            {/* Contraseña */}
            <Text style={Estilos.labelLogin}>Contraseña</Text>
            <Input
              placeholder="Ingrese su contraseña"
              size="xl"
              style={{ marginTop: 5 }}
              InputLeftElement={
                <Icon
                  as={<Entypo name="lock" />}
                  size={5}
                  ml="3"
                  color="muted.400"
                />
              }
              secureTextEntry={true}
            ></Input>
          </View>
          {/* Boton login */}
          <View style={{ marginTop: 30 }}>
            <Button style={Estilos.btnLogin}>Iniciar Sesión</Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
