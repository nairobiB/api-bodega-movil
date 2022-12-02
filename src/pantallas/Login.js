import Estilos from "../componentes/Estilos";
import {
  Text,
  ScrollView,
  ImageBackground,
  View,
  TextInput,
  Button,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { Icon, Input } from "native-base";
import { Ionicons, Entypo } from "@expo/vector-icons";
import login from "../../assets/login.jpg";
import UsuarioContext from "../contexto/UsuarioContext";
import Cargando from "../componentes/Cargando";
import { Alert } from "react-native";
import {useNavigation} from "@react-navigation/native"

const Login = ({ navigation }) => {
  const nav = useNavigation()
  const [usuario, setUsuario] = useState(null);
  const [contrasena, setContrasena] = useState(null);
  const [validarUsuario, setValidarUsuario] = useState(false);
  const [validarContrasena, setValidarContrasena] = useState(false);
  const { setLogin } = useContext(UsuarioContext);
  const [espera, setEspera] = useState(false);
  const titulo = "Iniciar Sesion";
  useEffect(() => {
    if (!usuario) {
      setValidarUsuario(true);
    } else if (usuario.length < 3) {
      setValidarUsuario(true);
    } else {
      setValidarUsuario(false);
    }
    if (!contrasena) {
      setValidarContrasena(true);
    } else if (contrasena.length < 6) {
      setValidarContrasena(true);
    } else {
      setValidarContrasena(false);
    }
  }, [usuario, contrasena]);

  const iniciarSesion = async () => {
    console.log(usuario);
    if (!validarUsuario && !validarContrasena) {
      setEspera(true);
      await setLogin({ usuario: usuario, contrasena: contrasena });
      setEspera(false);
    } else {
      Alert.alert(titulo, "Debe enviar los datos correctos");
    }
  };

  const irpin = () => {
    console.log("Ir a PIN");
    navigation.navigate("Pin");
  };

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
              onPress={iniciarSesion}
            ></Button>
            <Button
              title="Recuperar Contraseña"
              color={"#000"}
              onPress={irpin}
            ></Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Login;
