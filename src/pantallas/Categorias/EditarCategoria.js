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
  const { id, lastCatName, lastSec } = route.params;
  const [nombreCat, setnombreCat] = useState(lastCatName);
  const [secCat, setseccionCat] = useState(lastSec.toString());
  const [validarCat, setValidarCat] = useState(false);
  const [espera, setEspera] = useState(false);
  const titulo = "Editar";
  var textoMensaje = "";
  useEffect(() => {
    if (!nombreCat && !secCat) {
      setValidarCat(true);
    } else if (nombreCat.length < 3 && nombreCat.length > 50) {
      setValidarCat(true);
    } else if (secCat) {
      setValidarCat(true);
    }
    else {
      setValidarCat(false);
    }
  }, [nombreCat], [secCat]);

  const editarCat = async (data) => {
    var textoMensaje = "";
    try {
      console.log(nombreCat);
      Axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      await Axios.put("/categorias/editar?id=" + id, {
        nombreCategoria: nombreCat,
        SeccionId: secCat,
      })

        .then(async (data) => {
          console.log(data);
          const json = data.data;
          if (json.errores.length == 0) {
            nombreCat = json.data.nombreCat;
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
    editarCat();
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
            <Text style={Estilos.labelCruds}>Nombre de la Categoria</Text>
            <View>
              <TextInput
                value={nombreCat}
                onChangeText={setnombreCat}
                placeholder="Ingrese la Categoria"
                style={Estilos.entradasCrud}
              />

              <TextInput
                value={secCat}
                onChangeText={setseccionCat}
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
