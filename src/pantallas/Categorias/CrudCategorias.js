import Estilos from "../../componentes/Estilos";
import { Text, ScrollView, View, TextInput, Alert } from "react-native";
import Axios from "../../componentes/Axios";
import { Icon, Divider, Heading, Switch, Button } from "native-base";
import React, { useState, useEffect, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function App() {
  const nav = useNavigation();
  const [nombreCat, setnombreCat] = useState(null);
  const [secCat, setseccionCat] = useState(null);
  const [validarCat, setValidarCat] = useState(false);
  const [espera, setEspera] = useState(false);
  const titulo = "Agregar";
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

  const guardarcat = async (data) => {
    try {
      console.log(nombreCat);
      await Axios.post("/categorias/guardar", {
        nombreCategoria: data.nombreCat,
        SeccionId: data.secCat
      })
        .then(async (data) => {
          const json = data.data;
          if (json.errores.length == 0) {
            nombreCat = json.data.nombreCat;
            secCat = json.data.secCat;
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
    if (!validarCat) {
      setEspera(true);
      await guardarcat({ nombreCat: nombreCat, secCat: secCat });
      setEspera(false);
    } else {
      Alert.alert(titulo, "Debe enviar los datos correctos");
    }
  };
  const regresar = () => {
    agregar();
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
            {/* <Button
              color={"#313087"}
              style={Estilos.botones}
              onPress={agregar}
              title="Guardar"
            />
            <Button
              color={"#313087"}
              style={Estilos.botones}
              onPress={agregar}
              title="Cancelar"
            /> */}
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
}
