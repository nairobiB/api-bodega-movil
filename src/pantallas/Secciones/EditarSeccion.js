import Estilos from "../../componentes/Estilos";
import { Text, ScrollView, View, TextInput, Alert } from "react-native";
import Axios from "../../componentes/Axios";
import { Icon, Divider, Heading, Switch, Button } from "native-base";
import UsuarioContext from "../../contexto/UsuarioContext";
import React, { useState, useEffect, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function App({route, navigation}) {
  const nav = useNavigation();
  const { token } = useContext(UsuarioContext);
  const { id, lastSecName } = route.params;
  const [nombreSeccion, setnombreSec] = useState(lastSecName);
  const [validarSec, setValidarSec] = useState(false);
  const [espera, setEspera] = useState(false);
  const titulo = "Editar";
  useEffect(() => {
    if (!nombreSeccion) {
      setValidarSec(true);
    } else if (nombreSeccion.length < 3 && nombreSeccion.length > 50) {
      setValidarSec(true);
    } else {
      setValidarSec(false);
    }
  }, [nombreSeccion]);

  const editarSec = async (data) => {
    var textoMensaje = "";
    try {
      console.log(nombreSeccion);
      Axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      await Axios.put("/secciones/editar?id=" + id, {
        nombreSeccion: nombreSeccion,
      })

        .then(async (data) => {
          console.log(data);
          const json = data.data;
          if (json.errores.length == 0) {
            nombreSeccion = json.data.nombreSeccion;
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
    editarSec();
    nav.goBack();
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
            <Text style={Estilos.labelCruds}>Nombre de la Seccion</Text>
            <View>
              <TextInput
                value={nombreSeccion}
                onChangeText={setnombreSec}
                placeholder="Ingrese la Seccion"
                style={Estilos.entradasCrud}
              />
            </View>
          </View>

          <View style={Estilos.contenedorBotonesCrud}>
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
}
