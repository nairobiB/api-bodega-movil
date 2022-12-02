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
import React, {useState, useEffect} from "react";

const PersonalCrud = () => {

  const [nomcompleto, setNombre]=useState(null);
  const [direccion, setDireccion]=useState(null)
  const [correo, setCorreo]=useState(null);
  const [telefono, setTelefono]=useState(null);
  const [fechaNac, setFechaNac]=useState(null);
  const [validacionNombre, setValidacionNombre]=useState(false);
  const [validacionDireccion, setValidacionDireccion]=useState(false);
  const [validacionCorreo, setValidacionCorreo]=useState(false);
  const [validacionTelefono, setValidacionTelefono]=useState(false);
  const [validacionFechaNac, setValidacionFechaNac]=useState(false);
  useEffect(()=>{
    //console.log('Se ejecuto');
    //console.log(usuario);
    if(!nomcompleto){
      setValidacionNombre(true);
    }else if(nomcompleto.length<3){
      setValidacionNombre(true);
    }else{
      setValidacionNombre(false);
    }

    if(!direccion){
      setValidacionDireccion(true);
    }else if(direccion.length<10){
      setValidacionDireccion(true);
    }else{
      setValidacionDireccion(false);
    }
    if(!correo){
      setValidacionCorreo(true);
    }else if(correo.length<15){
      setValidacionCorreo(true);
    }else{
      setValidacionCorreo(false);
    }

    if(!telefono){
      setValidacionTelefono(true);
    }else if(telefono.length<10){
      setValidacionTelefono(true);
    }else{
      setValidacionTelefono(false);
    }
    if(!fechaNac){
      setValidacionFechaNac(true);
    }else if(fechaNac.length<10){
      setValidacionFechaNac(true);
    }else{
      setValidacionFechaNac(false);
    }
  },[nomcompleto,direccion,correo,telefono,fechaNac]);

  return (
    <ScrollView style={Estilos.container} showsVerticalScrollIndicator={false}>
      <View style={Estilos.principalView}>
        <Heading
          mx="3"
          alignItems="center"
          flexDirection="row"
          style={{ marginTop: 50 }}
        >
          AGREGAR EMPLEADO
        </Heading>
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
            <Text style={Estilos.labelCruds}>Nombre completo</Text>
            <TextInput style={validacionNombre?Estilos.entradas_error:Estilos.entradas}
            placeholder='Ingrese el correo o nombre de usuario'
            onChangeText={setNombre}>
            </TextInput>
            {
            validacionNombre ? (
              <>
                <Text style={Estilos.etiqueta_error}>
                Escriba el nombre
                </Text>
              </>
            ):
            (
              <>

              </>
            )
          }
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Dirección</Text>
            <TextInput style={validacionDireccion?Estilos.entradas_error:Estilos.entradas}
            placeholder='Ingrese la direccion'
            onChangeText={setDireccion}>
            </TextInput>
            {
            validacionDireccion ? (
              <>
                <Text style={Estilos.etiqueta_error}>
                Escriba la direccion
                </Text>
              </>
            ):
            (
              <>

              </>
            )
          }
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Correo</Text>
            <TextInput style={validacionCorreo?Estilos.entradas_error:Estilos.entradas}
            placeholder='Ingrese el correo'
            onChangeText={setCorreo}>
            </TextInput>
            {
            validacionCorreo ? (
              <>
                <Text style={Estilos.etiqueta_error}>
                Escriba el correo
                </Text>
              </>
            ):
            (
              <>

              </>
            )
          }
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Telefono</Text>
            <TextInput style={validacionTelefono?Estilos.entradas_error:Estilos.entradas}
            placeholder='Ingrese numero de telefono'
            onChangeText={setTelefono}>
            </TextInput>
            {
            validacionTelefono ? (
              <>
                <Text style={Estilos.etiqueta_error}>
                Escriba el telefono
                </Text>
              </>
            ):
            (
              <>

              </>
            )
          }
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Fecha de nacimiento</Text>
            <TextInput style={validacionFechaNac?Estilos.entradas_error:Estilos.entradas}
            placeholder='YYYY-MM-DD'
            onChangeText={setFechaNac}>
            </TextInput>
            {
            validacionFechaNac ? (
              <>
                <Text style={Estilos.etiqueta_error}>
                Escriba la fecha de nacimiento
                </Text>
              </>
            ):
            (
              <>

              </>
            )
          }
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Imagen</Text>
            <Button
              leftIcon={
                <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
              }
            >
              Cargar imagen
            </Button>
          </View>

          <View style={Estilos.estados}>
            <Text style={Estilos.labelCruds}>Activo</Text>
            <Switch size="lg" />
          </View>
          <View style={Estilos.contenedorBotones}>
            <Button style={Estilos.botones} color={"red"}>
              Cancelar
            </Button>
            <Button color={"#313087"} style={Estilos.botones}>
              Guardar
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default PersonalCrud;