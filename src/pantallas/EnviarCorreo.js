import Estilos from "../componentes/Estilos";
import {
  Text,
  ScrollView,
  ImageBackground,
  View,
  TextInput,
  Button,
} from "react-native";

import { Alert } from "react-native";
import login from "../../assets/login.jpg";
import { Icon, Input } from "native-base";
import { Ionicons, Entypo } from "@expo/vector-icons";

const EnviarCorreo = () => {
    return (
      //Header
      <ScrollView style={Estilos.container} showsVerticalScrollIndicator={false}>
        <ImageBackground source={login} style={Estilos.imagenLogin}>
          <View style={Estilos.firstView}>
            <Icon as={Ionicons} name="lock-closed-sharp" size={65} color={"white"} />
            <Text style={Estilos.textoTitulo}>Recuperar contraseña</Text>
          </View>
        </ImageBackground>
        {/* View Bottom */}
        <View style={Estilos.bottomView}>
          {/* Bienvenida */}
          <View style={{ padding: 40 }}>
            <Text style={Estilos.textoInicio}>Solicitud de credenciales</Text>
            {/* <Text style={{ fontSize: 10, marginTop: 5, fontStyle: "italic" }}>
              Por favor, ingrese sus datos
            </Text> */}
            {/* Entrada de datos */}
            <View style={{ marginTop: 25 }}>
              {/* Usuario */}
              <Text style={Estilos.labelLogin}>Correo</Text>
              <TextInput
                placeholder="Ingrese su correo de usuario"
                style={{ marginTop: 5 }}
                
              ></TextInput>

            </View>
            {/* Boton login */}
            <View style={{ marginTop: 30 }}>
              <Button
                style={Estilos.btnLogin}
                title="Enviar"
                
              ></Button>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };

  export default EnviarCorreo;