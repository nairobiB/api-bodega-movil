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
  const { id, antiguoRol } = route.params;
  const [nombreRol, setnombreRol] = useState(antiguoRol);
  const [validarRol, setValidarRol] = useState(false);
  const [espera, setEspera] = useState(false);
  const titulo = "Editar";
  useEffect(() => {
    if (!nombreRol) {
      setValidarRol(true);
    } else if (nombreRol.length < 3 && nombreRol.length > 50) {
      setValidarRol(true);
    } else {
      setValidarRol(false);
    }
  }, [nombreRol]);

  const editarRol = async (data) => {
    var textoMensaje = "";
    try {
      console.log(nombreRol);
      Axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      await Axios.put("/roles/editar?id=" + id, {
        nombreRol: nombreRol,
      })

        .then(async (data) => {
          console.log(data);
          const json = data.data;
          if (json.errores.length == 0) {
            nombreRol = json.data.nombreRol;
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
    editarRol();
    nav.goBack();
  };
  const agregar = async () => {
    if (!validarRol) {
      setEspera(true);
      await editarRol({ nombreRol: nombreRol });
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
            <Text style={Estilos.labelCruds}>Nombre del rol</Text>
            <TextInput
              value={nombreRol}
              onChangeText={setnombreRol}
              placeholder="Ingrese el rol"
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
