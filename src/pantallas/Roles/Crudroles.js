import Estilos from "../../componentes/Estilos";
import { Text, ScrollView, View, Button, TextInput, Alert } from "react-native";
import Axios from "../../componentes/Axios";
import { Icon, Divider, Heading, Switch } from "native-base";
import React, { useState, useEffect, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
export default function App() {
  const [nombreRol, setnombreRol] = useState(null);
  const [validarRol, setValidarRol] = useState(false);
  const [espera, setEspera] = useState(false);
  const titulo = "Agregar";
  useEffect(() => {
    if (!nombreRol) {
      setValidarRol(true);
    } else if (nombreRol.length < 3 && nombreRol.length > 50) {
      setValidarRol(true);
    } else {
      setValidarRol(false);
    }
  }, [nombreRol]);

  const guardarrol = async (data) => {
    try {
      console.log(nombreRol);
      await Axios.post("/roles/guardar", {
        nombreRol: data.nombreRol,
      })
        .then(async (data) => {
          const json = data.data;
          if (json.errores.length == 0) {
            nombreRol = json.data.nombreRol;
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
    if (!validarRol) {
      setEspera(true);
      await guardarrol({ nombreRol: nombreRol });
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
            />
          </View>

          <View style={Estilos.contenedorBotones}>
            <Button
              color={"#313087"}
              style={Estilos.botones}
              onPress={agregar}
              title="Guardar"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
