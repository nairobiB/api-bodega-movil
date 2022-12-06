import Estilos from "../../componentes/Estilos";
import {
  Text,
  ScrollView,
  ImageBackground,
  View
} from "react-native";
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
import { Ionicons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect, useContext } from "react";
import Axios from "../../componentes/Axios";

export default function App({route,navigation}) {
  const nav = useNavigation();
  const [espera, setEspera] = useState(false);
  const { id } = route.params
  var textoMensaje = "";
  const [idSalida, setidSalida] = useState(id);
  const [idProducto, setidProducto] = useState(null);
  const [tamanio, settamano] = useState(null);
  const [lotes, setlotes] = useState(null);
  const [precio, setPrecio] = useState(null);
  const [idSeccion, setSeccion] = useState(null);

  const [validarIdProducto, setValidarIdProducto] = useState(false);
  const [validartamano, setvalidarTamano] = useState(false);
  const [validarlote, setvalidarLote] = useState(false);
  const [validarprecio, setvalidarPrecio] = useState(false);
  const [validarfechaVen, setvalidarFechaVen] = useState(false);
  const [validarseccion, setvalidarSeccion] = useState(false);
  
  useEffect(() => {
    if (!idProducto) {
      setValidarIdProducto(true);
    } else{
      setValidarIdProducto(false)
    }

    if(!tamanio){
      setvalidarTamano(true)
    }else if(tamanio.length < 3 && tamanio.length > 50){
      setvalidarTamano(true)
    }else{
      setvalidarTamano(false)
    }

    if (!lotes) {
      setvalidarLote(true);
    } else{
      setvalidarLote(false)
    }

    if (!precio) {
      setvalidarPrecio(true);
    } else{
      setvalidarPrecio(false)
    }

    if (!idSeccion) {
      setvalidarSeccion(true);
    } else{
      setvalidarSeccion(false)
    }

  }, [idProducto, tamanio,lotes, precio, idSeccion]);


  const guardarDetalle = async (data) => {
    try {
      console.log(idSalida);

      await Axios.post("/detalles_Salida/guardar", {
        idSalida: data.idSalida,
        idProducto: data.idProducto,
        tamanio: data.tamanio,
        lotes: data.lotes,
        precio: data.precio,
        idSeccion: data.idSeccion,
      })
        .then(async (data) => {
          const json = data.data;
          if (json.errores.length == 0) {
            idSalida= json.data.idSalida,
            idProducto=  json.data.idProducto,
            tamanio=  json.data.Tamanio,
            lotes=  json.data.lotes,
            precio=  json.data.precio,
            idSeccion=  json.data.idSeccion          
            
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
    if (!validarIdProducto || !validartamano || !validarlote || !validarprecio || !validarseccion) {
      setEspera(true);
      await guardarDetalle({
        idSalida: idSalida,
        idProducto: idProducto,
        tamanio: tamanio,
        lotes: lotes,
        precio: precio,
        idSeccion: idSeccion});
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
        <Heading
          mx="3"
          alignItems="center"
          flexDirection="row"
          style={{ marginTop: 50 }}
        >
          DETALLES DE REGISTRO
        </Heading>
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
            <Text style={Estilos.labelCruds}>Producto</Text>
            <Input
              value={idProducto}
              onChangeText={setidProducto}
              size={"lg"}
              variant="outline"
              placeholder="Producto"
            />
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Tamaño</Text>
            <Input
              value={tamanio}
              onChangeText={settamano}
              size={"lg"}
              variant="outline"
              placeholder="Ingrese el tamaño del producto"
            />
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Lote</Text>
            <Input
              value={lotes}
              onChangeText={setlotes}
              size={"lg"}
              variant="outline"
              placeholder="Ingrese el numero de lote"
            />
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Precio</Text>
            <Input
              value={precio}
              onChangeText={setPrecio}
              size={"lg"}
              variant="outline"
              placeholder="Ingrese el precio del producto"
            />
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Seccion</Text>
            <Input
             value={idSeccion}
             onChangeText={setSeccion}
              size={"lg"}
              variant="outline"
              placeholder="seccion"
            />
          </View>

          <View style={Estilos.contenedorBotones}>
            <Button color={"#313087"} style={Estilos.botones}
            onPress={regresar}>
              Guardar
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
