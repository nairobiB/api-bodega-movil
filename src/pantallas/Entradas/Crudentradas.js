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
import Ent from "../../componentes/DetEntrada";
import Axios from "../../componentes/Axios";

export default function App({ route, navigation }) {
  const { token } = useContext(UsuarioContext);
  const nav = useNavigation();
  const { id, cliente,fechIngreso, sucursal } = route.params; 
  
  const [lista, setLista] = useState([]);

  const [validarFiltro, setValidarFiltro] = useState(false);
  const [espera, setEspera] = useState(false);
  const titulo = "Lista de Entradas";

  useEffect(() => {
    BuscarDetalles();
  }, []);



  const BuscarDetalles = async () => {
    var textoMensaje = "";
    console.log(id, cliente, fechIngreso,sucursal);
    setEspera(true);
    Axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    await Axios.get("/entradasdetalles/buscarid?idEntrada="+ id)
      .then(async (data) => {
        const json = data.data;

        setLista(json);
        console.log(json);
        // if (json.errores.length == 0) {
        //     setLista(json.data);
        // }
        // else {
        //     textoMensaje = '';
        //     json.errores.forEach(element => {
        //         textoMensaje += element.mensaje + '. ';
        //     });
        // }
      })
      .catch((er) => {
        console.log(er);
      });
    setEspera(false);
    if (textoMensaje != "") {
      Alert.alert(titulo, textoMensaje);
    }
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
            <Text style={Estilos.labelCruds}>Cliente: {cliente}</Text>
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Fecha de ingreso: {fechIngreso}</Text>
        
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Sucursal: {sucursal}</Text>
    
          </View>

          <View style={Estilos.contenedorBotonesCrud}
          >
                <Button
                style={Estilos.botonescrud}
                  onPress={() => nav.navigate("detEntrada",{id:id})}
                  colorScheme="darkBlue"
                >
                  Agregar nuevo Producto
                </Button>

          </View>


          <View style={Estilos.contenedorContenido}>
              <FlatList
                data={lista}
                renderItem={({ item }) => <Ent detalleEntrada={item}></Ent>}
                keyExtractor={(item) => item.idProducto}
              />
            </View>
        </View>

      </View>
      
    </View>
  );
}
