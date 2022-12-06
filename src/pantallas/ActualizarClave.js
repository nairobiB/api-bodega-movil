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
import { Alert } from "react-native";
import Axios from "../componentes/Axios";
import login from "../../assets/login.jpg";
import Cargando from "../componentes/Cargando";
import UsuarioContext from "../contexto/UsuarioContext";
import { Icon, Input } from "native-base";
import { Ionicons, Entypo } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const ActualizarClave = () => {
  const nav = useNavigation();
  const [usuario, setUsuario] = useState(null);
  const [pin, setpin] = useState(null);
  const [contrasena, setContrasena] = useState(null);
  const [confirmarContrasena, setconfirmarContrasena] = useState(null);
  const [validarUsuario, setValidarUsuario] = useState(false);
  const [validarpin, setValidarpin] = useState(false);
  const [validarContrasena, setValidarContrasena] = useState(false);
  const [validarConfirmarContrasena, setValidarConfirmarContrasena] =
    useState(false);
  const { setLogin } = useContext(UsuarioContext);
  const [espera, setEspera] = useState(false);
  const titulo = "Recuperar Contrasena";
  useEffect(() => {
    if (!usuario) {
      setValidarUsuario(true);
    } else if (usuario.length < 3 && usuario.length > 50) {
      setValidarUsuario(true);
    } else {
      setValidarUsuario(false);
    }
    if (!pin) {
      setValidarpin(true);
    } else if (pin.length < 4) {
      setValidarpin(true);
    } else {
      setValidarpin(false);
    }
    if (!contrasena) {
      setValidarContrasena(true);
    } else if (contrasena.length < 6) {
      setValidarContrasena(true);
    } else {
      setValidarContrasena(false);
    }
    if (!confirmarContrasena) {
      setValidarConfirmarContrasena(true);
    } else if (confirmarContrasena.length < 6) {
      setValidarConfirmarContrasena(true);
    } else if (contrasena != confirmarContrasena) {
      setValidarConfirmarContrasena(true);
    } else {
      setValidarConfirmarContrasena(false);
    }
  }, [pin, contrasena, confirmarContrasena]);

  const iniciarSesion = async (data) => {
    console.log(data.usuario);
    console.log(pin);
    console.log(contrasena);
    if (!validarContrasena && !validarConfirmarContrasena && !validarpin) {
      setEspera(true);
      var textoMensaje = "";
      try {
        await Axios.put(
          "/autenticacion/recuperarcontrasena?usuario=" + data.usuario,
          {
            pin: pin,
            contrasena: contrasena,
          }
        )
          .then(async (data) => {
            const json = data.data;
            if (json.errores.length == 0) {
              textoMensaje = "Contrasena Actualizada";
            } else {
              textoMensaje = "";
              json.errores.forEach((element) => {
                textoMensaje += element.mensaje + ". ";
              });
            }
          })
          .catch((error) => {
            textoMensaje = "La API no se encuentra activa o no responde";
            console.log(error);
          });
      } catch (error) {
        textoMensaje = "Error en la aplicacion";
        console.log(error);
      }
      setEspera(false);
      Alert.alert(titulo, textoMensaje);
      if (textoMensaje == "Contrasena Actualizada") {
        nav.navigate("Login");
      }
    } else {
      Alert.alert(titulo, "Debe enviar los datos correctos");
    }
  };

  const agregar = async () => {
    if (!validarUsuario) {
      setEspera(true);
      await iniciarSesion({ usuario: usuario });
      setEspera(false);
    } else {
      Alert.alert(titulo, "Debe enviar los datos correctos");
    }
  };

  return (
    //Header
    <ScrollView style={Estilos.container} showsVerticalScrollIndicator={false}>
      <ImageBackground source={login} style={Estilos.imagenLogin}>
        <View style={Estilos.firstView}>
          <Icon as={Ionicons} name="lock-open-sharp" size={65} color={"white"} />
          <Text style={Estilos.textoTitulo}>Recuperar contraseña</Text>
        </View>
      </ImageBackground>
      {espera ? (
        <Cargando texto="Cargando Datos"></Cargando>
      ) : (
        <>
          <View style={Estilos.bottomView}>
            <View style={{ padding: 40 }}>
              <Text style={Estilos.textoInicio}>Formulario de recuperacion</Text>
              <View style={{ marginTop: 25 }}>
                <Text style={Estilos.labelLogin}>Usuario</Text>
                <TextInput
                  placeholder="Ingrese su usuario"
                  style={Estilos.entradas}
                  value={usuario}
                  onChangeText={setUsuario}
                ></TextInput>
                <Text style={Estilos.labelLogin}>Pin</Text>
                <TextInput
                  placeholder="Ingrese el Pin recibido"
                  style={Estilos.entradas}
                  value={pin}
                  onChangeText={setpin}
                  type="number"

                ></TextInput>
                {validarpin ? (
                  <>

                  </>
                ) : (
                  <></>
                )}
                <Text style={Estilos.labelLogin}>Nueva Contraseña</Text>
                <TextInput
                  placeholder="Ingrese la nueva contraseña"
                  style={Estilos.entradas}
                  secureTextEntry={true}
                  value={contrasena}
                  onChangeText={setContrasena}
                ></TextInput>

                {validarContrasena ? (
                  <>

                  </>
                ) : (
                  <></>
                )}

                <Text style={Estilos.labelLogin}>Confirmar contraseña</Text>
                <TextInput
                  placeholder="Confirme su nueva contraseña"
                  style={Estilos.entradas}
                  secureTextEntry={true}
                  value={confirmarContrasena}
                  onChangeText={setconfirmarContrasena}
                ></TextInput>

                {validarConfirmarContrasena ? (
                  <>

                  </>
                ) : (
                  <></>
                )}

              </View>
              {/* Boton login */}
              <View style={{ marginTop: 30 }}>
                <Button
                  style={Estilos.btnLogin}
                  title="Enviar"
                  onPress={agregar}
                ></Button>
              </View>
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default ActualizarClave;