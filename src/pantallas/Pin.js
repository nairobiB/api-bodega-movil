import {
  Text,
  View,
  Button,
  ImageBackground,
  TextInput,
  Alert,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import Estilos from "../componentes/Estilos";
import logg from "../../assets/login.jpg";
import UsuarioContext from "../contexto/UsuarioContext";
import Cargando from "../componentes/Cargando";
import Axios from "../componentes/Axios";

const Pin = ({ navigation }) => {
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
    <View style={Estilos.contenedorPrincipal}>
      <View style={Estilos.contenedorTitulo}>
        <ImageBackground
          source={logg}
          resizeMode="stretch"
          style={Estilos.imagenFondo}
        >
          <Text style={Estilos.textoTitulo}>{titulo}</Text>
        </ImageBackground>
      </View>
      <View style={Estilos.contenedorContenido}>
        {espera ? (
          <Cargando texto={msjEspera}></Cargando>
        ) : (
          <>
            <View style={Estilos.contenedorControles}>
              <Text style={Estilos.etiqueta}>Correo</Text>
              <TextInput
                style={validarCorreo ? Estilos.entradaError : Estilos.entrada}
                placeholder="Escriba el correo"
                value={correo}
                onChangeText={setCorreo}
              ></TextInput>
              {validarCorreo ? (
                <>
                  <Text style={Estilos.etiquetaError}>
                    Dede escribir un correo valido
                  </Text>
                </>
              ) : (
                <></>
              )}
            </View>
            <View style={Estilos.contenedorBotones}>
              <View style={Estilos.boton}>
                <Button
                  title="Enviar"
                  color={"#000"}
                  onPress={enviarPin}
                ></Button>
              </View>
              <View style={Estilos.boton}>
                <Button
                  title="Atras"
                  color={"red"}
                  onPress={() => navigation.navigate("Login")}
                ></Button>
              </View>
            </View>
          </>
        )}
      </View>
    </View>
  );
};
export default Pin;
