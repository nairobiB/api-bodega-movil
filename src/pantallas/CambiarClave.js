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

const Login = ({ navigation }) => {
    return (
      //Header
      <ScrollView style={Estilos.container} showsVerticalScrollIndicator={false}>
        <ImageBackground source={login} style={Estilos.imagenLogin}>
          <View style={Estilos.firstView}>
            <Icon as={Ionicons} name="log-in" size={65} color={"white"} />
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
            <View style={{ marginTop: 25 }}>
              {/* Usuario */}
              <Text style={Estilos.labelLogin}>Usuario</Text>
              <TextInput
                placeholder="Ingrese su usuario"
                style={{ marginTop: 5 }}
                value={usuario}
                onChangeText={setUsuario}
              ></TextInput>
  
              {/* Contraseña */}
              <Text style={Estilos.labelLogin}>Contraseña</Text>
              <TextInput
                placeholder="Ingrese su contraseña"
                style={{ marginTop: 5 }}
                secureTextEntry={true}
                value={contrasena}
                onChangeText={setContrasena}
              ></TextInput>
            </View>
            {/* Boton login */}
            <View style={{ marginTop: 30 }}>
              <Button
                style={Estilos.btnLogin}
                title="Iniciar sesión"
                onPress={Alert.alert("Hola")}
              ></Button>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };

  export default CambiarClave;