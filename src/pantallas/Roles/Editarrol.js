import Estilos from "../../componentes/Estilos";
import { Text, ScrollView, View, Button, TextInput, Alert } from "react-native";
import Axios from "../../componentes/Axios";
import { Icon, Divider, Heading, Switch } from "native-base";
import UsuarioContext from "../../contexto/UsuarioContext";
import React, { useState, useEffect, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
export default function App( {route, navigation} ) {
  const { token } = useContext(UsuarioContext);
  const [ nombreRol, setnombreRol] = useState(null);
  const { id, antiguoRol } = route.params;
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
      Axios.defaults.headers.common["Authorization"] = "Bearer " + token
      await Axios.put("/roles/editar?id=" + id, {
        nombreRol: nombreRol,
      })
        
        .then(async (data) => {
          console.log(data)
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
            <Text style={Estilos.labelCruds}>Rol actual: {antiguoRol}</Text>
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
              onPress={editarRol}
              title="Editar"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
