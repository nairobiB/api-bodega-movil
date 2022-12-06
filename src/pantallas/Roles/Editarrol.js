import Estilos from "../../componentes/Estilos";
import { Text, ScrollView, View, TextInput, Alert } from "react-native";
import Roles from "../../componentes/Roles";
import Axios from "../../componentes/Axios";
import { Icon, Divider, Heading, Switch, Button } from "native-base";
import React, { useState, useEffect, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
export default function App(props) {
  const [nombreRol, setnombreRol] = useState(null);
  const [idRol, setIdRol] = useState(1);
  const [validarRol, setValidarRol] = useState(false);
  const [espera, setEspera] = useState(false);
  const titulo = "Agregar";
  var textoMensaje = "";
  useEffect(() => {
    if (!nombreRol) {
      setValidarRol(true);
    } else if (nombreRol.length < 3 && nombreRol.length > 50) {
      setValidarRol(true);
    } else {
      setValidarRol(false);
    }
  }, [nombreRol]);

  const editarrol = async (data) => {
    try {
      console.log(nombreRol);
      await Axios.post("/roles/editar", {
        nombreRol: data.nombreRol,
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

  const agregar = async () => {
    if (!validarRol) {
      setEspera(true);
      await editarrol({ nombreRol: nombreRol });
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
            <Text style={Estilos.labelCruds}>ID del rol</Text>
            <View>
              <TextInput
                value={"1"}
                onChangeText={setnombreRol}
                editable={false}
                style={Estilos.entradasCrud}
              />
            </View>
            <Text style={Estilos.labelCruds}>Nombre del rol</Text>
            <View>
              <TextInput
                value={nombreRol}
                onChangeText={setnombreRol}
                placeholder="Ingrese el rol"
                style={Estilos.entradasCrud}
              />
            </View>
          </View>

          <View style={Estilos.contenedorBotonesCrud}>
            <Button
              color={"#313087"}
              style={Estilos.botonescrud}
              onPress={agregar}
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
}
