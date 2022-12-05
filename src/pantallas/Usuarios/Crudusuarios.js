import Estilos from "../../componentes/Estilos";
import {
  Text,
  ScrollView,
  ImageBackground,
  View,
  DatePickerAndroidStatic,
  TextInput,
} from "react-native";
import {
  Icon,
  Input,
  Button,
  VStack,
  Divider,
  Box,
  Heading,
  MaterialIcons,
  Switch,
} from "native-base";
import { Ionicons, Entypo } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";

const PersonalCrud = () => {
  const [nomUsuario, setNombreUsuario] = useState(null);
  const [contrasena, setContrasena] = useState(null);
  const [correo, setCorreo] = useState(null);
  const [validacionNombre, setValidacionNombre] = useState(false);
  const [validacionContrasena, setValidacionContrasena] = useState(false);
  const [validacionCorreo, setValidacionCorreo] = useState(false);
  useEffect(() => {
    //console.log('Se ejecuto');
    //console.log(usuario);
    if (!nomUsuario) {
      setValidacionNombre(true);
    } else if (nomUsuario.length < 3) {
      setValidacionNombre(true);
    } else {
      setValidacionNombre(false);
    }
    if (!contrasena) {
      setValidacionContrasena(true);
    } else if (contrasena.length < 10) {
      setValidacionContrasena(true);
    } else {
      setValidacionContrasena(false);
    }
    if (!correo) {
      setValidacionCorreo(true);
    } else if (correo.length < 15) {
      setValidacionCorreo(true);
    } else {
      setValidacionCorreo(false);
    }
  }, [nomUsuario, contrasena, correo]);

  return (
    <ScrollView style={Estilos.container} showsVerticalScrollIndicator={false}>
      <View style={Estilos.principalView}>
        <Divider
          my="2"
          _light={{
            bg: "muted.800",
          }}
          _dark={{
            bg: "muted.50",
          }}
        />

        <View style={Estilos.contenedorContenido}>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Usuario</Text>
            <TextInput
              style={
                (validacionNombre ? Estilos.entradas_error : Estilos.entradas,
                Estilos.entradasCrud)
              }
              placeholder="Ingrese el correo o nombre de usuario"
              onChangeText={setNombreUsuario}
            ></TextInput>
            {validacionNombre ? (
              <>
                <Text style={Estilos.etiqueta_error}>Escriba el usuario</Text>
              </>
            ) : (
              <></>
            )}
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Contraseña</Text>
            <TextInput
              style={
                (validacionContrasena
                  ? Estilos.entradas_error
                  : Estilos.entradas,
                Estilos.entradasCrud)
              }
              placeholder="Ingrese la Contraseña"
              onChangeText={setContrasena}
            ></TextInput>
            {validacionContrasena ? (
              <>
                <Text style={Estilos.etiqueta_error}>
                  Escriba la contrasena
                </Text>
              </>
            ) : (
              <></>
            )}
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Correo</Text>
            <TextInput
              style={
                (validacionCorreo ? Estilos.entradas_error : Estilos.entradas,
                Estilos.entradasCrud)
              }
              placeholder="Ingrese el correo"
              onChangeText={setCorreo}
            ></TextInput>
            {validacionCorreo ? (
              <>
                <Text style={Estilos.etiqueta_error}>Escriba el correo</Text>
              </>
            ) : (
              <></>
            )}
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Imagen</Text>
            <Button
              leftIcon={
                <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
              }
              colorScheme="darkBlue"
            >
              Cargar imagen
            </Button>
          </View>

          <View style={Estilos.estados}>
            <Text style={Estilos.labelCruds}>Activo</Text>
            <Switch size="lg" />
          </View>
          <View style={Estilos.contenedorBotones}>
            <Button
              color={"#313087"}
              style={Estilos.botonescrud}
              colorScheme="darkBlue"
            >
              Guardar
            </Button>
            <Button
              color={"#313087"}
              style={Estilos.botonescrud}
              colorScheme="muted"
            >
              Cancelar
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default PersonalCrud;
