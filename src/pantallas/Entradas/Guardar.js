import Estilos from "../../componentes/Estilos";
import { Text, ScrollView, ImageBackground, View, FlatList } from "react-native";
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
import React, { useState, useEffect, useContext } from "react";
import UsuarioContext from "../../contexto/UsuarioContext";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import Axios from "../../componentes/Axios";

export default function App({ route, navigation }) {
  const { token } = useContext(UsuarioContext);
  const nav = useNavigation();
  const titulo = "Agregar";
  var textoMensaje = "";

  const [idCliente, setidIdCliente] = useState(null);
  const [fechaIngreso, setfechaIngreso] = useState(null);
  const [idSucursal, setidSucursal] = useState(null);
  const [ValidaridCliente, setValidaridIdCliente] = useState(false);
  const [ValidarfechaIngreso, setValidarfechaIngreso] = useState(false);
  const [ValidaridSucursal, setValidaridSucursal] = useState(false);

  const [espera, setEspera] = useState(false);



  const guardar = async (data) => {
    try {
      console.log(id);

      await Axios.post("/entradas/guardar/", {
        idCliente: data.idCliente,
        fechaIngreso: data.fechaIngreso,
        idSucursal: data.idSucursal,
    
      })
        .then(async (data) => {
          const json = data.data;
          if (json.errores.length == 0) {
            idCliente= json.data.idCliente,
            fechaIngreso= json.data.fechaIngreso,
            idSucursal= json.data.idSucursa     
            
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
    if (!ValidaridCliente || !ValidarfechaIngreso || !ValidaridSucursal) {
      setEspera(true);
      await guardar({
        idCliente: idCliente,
        fechaIngreso: fechaIngreso,
        idSucursal: idSucursal,
      });
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
    <View style={Estilos.container} showsVerticalScrollIndicator={false}>
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
            <Text style={Estilos.labelCruds}>Cliente</Text>
            <Input
              size={"lg"}
              value={idCliente}
              onChangeText={setidIdCliente}
              type={Number}
              variant="outline"
              placeholder="Ingrese nombre del cliente"
            />
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Fecha de ingreso</Text>
            <Input size={"lg"} 
            value={fechaIngreso}
            onChangeText={setfechaIngreso}
            variant="outline" placeholder="YYYY-MM-DD" />
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Sucursal</Text>
            <Input
              size={"lg"}
              value={idSucursal}
              onChangeText={setidSucursal}
              variant="outline"
              placeholder="Nombre sucursal"
            />
          </View>


          <View style={Estilos.contenedorBotones}>
         
            <Button color={"#313087"} style={Estilos.botonescrud}
              onPress={regresar}>
              Guardar
            </Button>
          </View>

        </View>

      </View>
      
    </View>
  );
}
