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
import React, { useState, useEffect, useContext } from "react";
import login from "../../assets/login.jpg";
import { Icon, Input } from "native-base";
import { Ionicons, Entypo } from "@expo/vector-icons";
import Axios from "../componentes/Axios";
import Cargando from "../componentes/Cargando";

const EnviarCorreo = () => {
  const [correo, setCorreo] = useState(null);
  const [validarCorreo, setValidarCorreo] = useState(false);
  const [espera, setEspera] = useState(false);
  const [msjEspera, setMsjEspera] = useState("Cargando datos");
  const titulo = "Enviar Correo";
  useEffect(() => {
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!correo) {
      setValidarCorreo(true);
    } else if (reg.test(correo) == false) {
      setValidarCorreo(true);
    } else {
      setValidarCorreo(false);
    }
  }, [correo]);
  const enviarPin = async () => {
    console.log(correo);
    if (!validarCorreo) {
      setEspera(true);
      var textoMensaje = "";
      setMsjEspera("Enviando PIN al correo " + correo);
      try {
        await Axios.post("/autenticacion/pin", {
          correo: correo,
        })
          .then(async (data) => {
            const json = data.data;
            if (json.errores.length == 0) {
              textoMensaje = json.data.msj;
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
      if (textoMensaje == "Correo Enviado") {
        navigation.navigate("NuevaContrasena", { correo: correo });
      }
    } else {
      Alert.alert(titulo, "Debe enviar los datos correctos");
    }
  };

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