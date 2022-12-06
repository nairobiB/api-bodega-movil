import Estilos from "../../componentes/Estilos";
import {
  Text,
  ScrollView,
  ImageBackground,
  View,
  DatePickerAndroidStatic,
  TextInput,
  Alert,
  ImagePickerIOS,
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
import Axios from "../../componentes/Axios";
import AxiosImagen from "../../componentes/AxiosImagen";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import {urlImagenesUsuarios} from '../../configuraciones/Urls'
import axios from "axios";
import { set } from "react-native-reanimated";

const PersonalCrud = () => {
  const nav = useNavigation();
  const [usuario, setNombreUsuario] = useState(null);
  const [contrasena, setContrasena] = useState(null);
  const [correo, setCorreo] = useState(null);
  const [permisos, setPermisos] = useState(null);
  const [PersonalId, setIdPersonal] = useState(null);
  const [archivo, setArchivo] = useState(null);
  const [validacionNombre, setValidacionNombre] = useState(false);
  const [validacionContrasena, setValidacionContrasena] = useState(false);
  const [validacionCorreo, setValidacionCorreo] = useState(false);
  const [validacionPermisos, setValidacionPermisos] = useState(false);
  const [validacionIdPersonal, setValidacionPersonalId] = useState(false);
  const [espera, setEspera] = useState(false);
  const titulo = "Agregar";
  var textoMensaje = "";
  useEffect(() => {
    //console.log('Se ejecuto');
    //console.log(usuario);
    if (!usuario) {
      setValidacionNombre(true);
    } else if (usuario.length < 3 && usuario.length >  50) {
      setValidacionNombre(true);
    } else {
      setValidacionNombre(false);
    }
    if (!contrasena) {
      setValidacionContrasena(true);
    } else if (contrasena.length < 5 && contrasena.length > 65) {
      setValidacionContrasena(true);
    } else {
      setValidacionContrasena(false);
    }
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!correo) {
      setValidacionCorreo(true);
    } else if (reg.test(correo) == false) {
      setValidacionCorreo(true);
    } else {
      setValidacionCorreo(false);
    }
    if (!permisos) {
      setValidacionPermisos(true);
    } else if (permisos.length < 3) {
      setValidacionPermisos(true);
    } else {
      setValidacionPermisos(false);
    }
    if (!PersonalId) {
      setValidacionPersonalId(true);
    } else if (PersonalId.length < 1) {
      setValidacionPersonalId(true);
    } else {
      setValidacionPersonalId(false);
    }
  }, [usuario, contrasena, correo, permisos, PersonalId]);

  const guardarUsuario = async (data) => {
    try {
      console.log(data);
      await Axios.post("/users/guardar", {
        usuario: data.usuario,
        contrasena : data.contrasena,
        correo : data.correo,
        permisos: data.permisos,
        PersonalId : data.PersonalId,
      })
        .then(async (data) => {
          const json = data.data;
          if (json.errores.length == 0) {
            usuario = json.data.usuario;
            contrasena = json.data.contrasena;
            correo = json.data.correo;
            permisos = json.data.permisos;
            PersonalId = json.data.PersonalId;
          } else {
            json.errores.forEach((element) => {
              textoMensaje += element.mensaje + ". ";
            });
          }
        })
        .catch((error) => {
          textoMensaje = error;
        });

    } catch (error) {
      textoMensaje = error;
      console.log(error);
    }
  };

  const agregar = async () => {
    if (!validacionNombre || !validacionCorreo || !validacionContrasena || !validacionPermisos || !validacionIdPersonal) {
      setEspera(true);
      await guardarUsuario({ usuario: usuario, contrasena:contrasena,correo:correo,permisos:permisos,PersonalId:PersonalId });
      setEspera(false);
    } else {
      Alert.alert(titulo, "Debe enviar los datos correctos");
    }
  };
  const regresar = () => {
    agregar();
    nav.goBack();
  };
  const cargarImagen = async (arch) => {
    // Alert.alert(titulo, "Seleccione la imagen");

    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if(permissionResult.granted === false){
      Alert.alert(titulo, "Para seleccionar la imagen debe de brindar permisos de acceso");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality:1,
    });
    console.log(pickerResult.assets[0]);
    const archivo = new FormData();
    let uriParts = pickerResult.assets[0].uri.split('.');
    let tipo = pickerResult.assets[0].type + '/' + uriParts[uriParts.length - 1];
    uriParts = pickerResult.assets[0].uri.split('/');
    let nombre = uriParts[uriParts.length - 1];
    uriParts = pickerResult.assets[0].uri

    archivo.append('img',{
      name: nombre,
      type: tipo,
      uri: uriParts,
    });
    var mensaje = '';
    // Axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    await AxiosImagen.post('users/imagen', archivo)
    .then(async (data) => {
      const json = data.data;
      if (json.errores.length == 0) {
        mensaje = "Imagen añadida";
        console.log(json.data.usuario);
        await setNombreUsuario(json.data.usuario);
      } else {
        mensaje = 'Error';
        json.errores.forEach((element) => {
          textoMensaje += element.mensaje + ". ";
        });
      }
    })
    .catch((error) => {
      textoMensaje = error;
    });
    setEspera(false);
    Alert.alert(titulo,mensaje);
  };


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
              value= {usuario}
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
              style={Estilos.entradasCrud}
              placeholder="Ingrese la Contraseña"
              value= {contrasena}
              onChangeText={setContrasena}
              secureTextEntry={true}
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
              style={Estilos.entradasCrud}
              placeholder="Ingrese el correo"
              value= {correo}
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
            <Text style={Estilos.labelCruds}>Permiso</Text>
            <TextInput
              style={Estilos.entradasCrud}
              placeholder="Ingrese el permiso del usuario"
              value= {permisos}
              onChangeText={setPermisos}
            ></TextInput>
            {validacionPermisos ? (
              <>
                <Text style={Estilos.etiqueta_error}>Escriba el permiso</Text>
              </>
            ) : (
              <></>
            )}
          </View>

          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Id Personal</Text>
            <TextInput
              style={
                Estilos.entradasCrud
              }
              placeholder="Ingrese el Id del empleado"
              value= {PersonalId}
              onChangeText={setIdPersonal}
            ></TextInput>
            {validacionIdPersonal ? (
              <>
                <Text style={Estilos.etiqueta_error}>Escriba el id del empleado</Text>
              </>
            ) : (
              <></>
            )}
          </View>

          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Imagen</Text>
            <Button
              onPress={cargarImagen}
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
            <Switch size="lg" defaultIsChecked />
          </View>
          <View style={Estilos.contenedorBotones}>
          <Button
              color={"#313087"}
              style={Estilos.botonescrud}
              onPress={regresar}
              colorScheme="darkBlue"
            >
              Guardar
            </Button>
            <Button
              color={"#313087"}
              style={Estilos.botonescrud}
              colorScheme="muted"
              onPress={() => nav.goBack()}
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
