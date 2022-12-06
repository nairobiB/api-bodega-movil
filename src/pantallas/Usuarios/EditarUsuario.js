import Estilos from "../../componentes/Estilos";
import { Text, ScrollView, View, TextInput, Alert } from "react-native";
import Axios from "../../componentes/Axios";
import { Icon, Divider, Heading, Button, Switch } from "native-base";
import UsuarioContext from "../../contexto/UsuarioContext";
import { useNavigation } from "@react-navigation/native";

import React, { useState, useEffect, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
export default function App({ route, navigation }) {
  const nav = useNavigation();
  const { token } = useContext(UsuarioContext);
  const { id,usuario,correo,permisos} = route.params;
  const [username, setnombreUsuario] = useState(usuario);
  const [email, setCorreo] = useState(correo);
  const [permiso, setPermisos] = useState(permisos);
  const [validacionNombre, setValidacionNombre] = useState(false);
  const [validacionCorreo, setValidacionCorreo] = useState(false);
  const [validacionPermisos, setValidacionPermisos] = useState(false);
  const [espera, setEspera] = useState(false);
  const titulo = "Editar";
  console.log(id);
  useEffect(() => {
    //console.log('Se ejecuto');
    //console.log(usuario);
    if (!username) {
        setValidacionNombre(true);
    } else if (username.length < 3 && username.length >  50) {
      setValidacionNombre(true);
    } else {
      setValidacionNombre(false);
    }
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!email) {
      setValidacionCorreo(true);
    } else if (reg.test(email) == false) {
      setValidacionCorreo(true);
    } else {
      setValidacionCorreo(false);
    }
    if (!permiso) {
      setValidacionPermisos(true);
    } else if (permiso.length < 3) {
      setValidacionPermisos(true);
    } else {
      setValidacionPermisos(false);
    }
  }, [username, email, permiso]);

  const editarUsuario = async (data) => {
    var textoMensaje = "";
    try {
      console.log(id);
      Axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      await Axios.put("/users/editar?id=" + id, {
        usuario: username,
        correo : email,
        permisos: permiso,
      })
        .then(async (data) => {
          console.log(data);
          const json = data.data;
          if (json.errores.length == 0) {
            usuario = json.data.usuario;
            email = json.data.correo;
            permiso = json.data.permisos;
          } else {
            json.errores.forEach((element) => {
              textoMensaje += element.mensaje + ". ";
            });
          }
          console.log(data);
        })
        .catch((error) => {
          textoMensaje = error;
        });
    } catch (error) {
      textoMensaje = error;
      console.log(error);
    }
  };

  const regresar = () => {
    editarUsuario();
    nav.goBack();
  };
  const agregar = async () => {
    if (!validacionNombre || !validacionCorreo || !validacionPermisos ) {
      setEspera(true);
      await editarUsuario({ usuario: username,correo:email,permisos:permiso});
      setEspera(false);
    } else {
      Alert.alert(titulo, "Debe enviar los datos correctos");
    }
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
              value={username}
              onChangeText={setnombreUsuario}
              placeholder="Ingrese el nombre de usuario"
              style={Estilos.entradasCrud}
            ></TextInput>
            <Text style={Estilos.labelCruds}>Correo</Text>
            <TextInput
              value={email}
              onChangeText={setCorreo}
              placeholder="Ingrese el correo"
              style={Estilos.entradasCrud}
            ></TextInput>
            <Text style={Estilos.labelCruds}>Permisos</Text>
            <TextInput
              value={permiso}
              onChangeText={setPermisos}
              placeholder="Ingrese el permiso"
              style={Estilos.entradasCrud}
            ></TextInput>
          </View>

          <View style={Estilos.contenedorBotones}>
            <Button
              color={"#313087"}
              style={Estilos.botonescrud}
              onPress={regresar}
              colorScheme="darkBlue"
            >
              Editar
            </Button>
            <Button
              color={"#313087"}
              style={Estilos.botonescrud}
              onPress={() => nav.goBack()}
              colorScheme="muted"
            >
              Cancelar
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
