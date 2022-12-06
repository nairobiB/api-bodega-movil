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
import React, { useState, useEffect, useContext } from "react";
import Axios from "../../componentes/Axios";
import { useNavigation } from "@react-navigation/native";

export default function App({ route, navigation }) {
  const nav = useNavigation();
  const { id } = route.params;
  const [espera, setEspera] = useState(false);
  const titulo = "Agregar";
  var textoMensaje = "";
  const [idEntrada, setidEntrada] = useState(id);
  const [idProducto, setidProducto] = useState(null);
  const [Tamanio, setTamano] = useState(null);
  const [numLote, setLote] = useState(null);
  const [precio, setPrecio] = useState(null);
  const [fechaVencimiento, setFechaVen] = useState(null);
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

    if(!Tamanio){
      setvalidarTamano(true)
    }else if(Tamanio.length < 3 && Tamanio.length > 50){
      setvalidarTamano(true)
    }else{
      setvalidarTamano(false)
    }

    if (!numLote) {
      setvalidarLote(true);
    } else{
      setvalidarLote(false)
    }

    if (!precio) {
      setvalidarPrecio(true);
    } else{
      setvalidarPrecio(false)
    }

    if (!fechaVencimiento) {
      setvalidarFechaVen(true);
    } else{
      setvalidarFechaVen(false)
    }
    if (!idSeccion) {
      setvalidarSeccion(true);
    } else{
      setvalidarSeccion(false)
    }

  }, [idProducto, Tamanio,precio,numLote, fechaVencimiento,idSeccion]);


  const guardarDetalle = async (data) => {
    try {
      console.log(id);

      await Axios.post("/entradasdetalles/guardar/", {
        idEntrada: data.idEntrada,
        idProducto: data.idProducto,
        Tamanio: data.Tamanio,
        numLote: data.numLote,
        precio: data.precio,
        fechaVencimiento: data.fechaVencimiento,
        idSeccion: data.idSeccion,
      })
        .then(async (data) => {
          const json = data.data;
          if (json.errores.length == 0) {
            idEntrada= json.data.idEntrada,
            idProducto=  json.data.idProducto,
            Tamanio=  json.data.Tamanio,
            numLote=  json.data.numLote,
            precio=  json.data.precio,
            fechaVencimiento=  json.data.fechaVencimiento,
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
    if (!validarIdProducto || !validartamano || !validarlote || !validarprecio ||!validarfechaVen || !validarseccion) {
      setEspera(true);
      await guardarDetalle({
        idEntrada: idEntrada,
        idProducto: idProducto,
        Tamanio: Tamanio,
        numLote: numLote,
        precio: precio,
        fechaVencimiento: fechaVencimiento,
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
              value={Tamanio}
              onChangeText={setTamano}
              size={"lg"}
              variant="outline"
              placeholder="Ingrese el tamaño del producto"
            />
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Lote</Text>
            <Input
            value={numLote}
            onChangeText={setLote}
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
            <Text style={Estilos.labelCruds}>Fecha de vencimiento</Text>
            <Input value={fechaVencimiento}
              onChangeText={setFechaVen}
              type={Date}
            size={"lg"} variant="outline" placeholder="YYYY-MM-DD" />
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
         
            <Button color={"#313087"} style={Estilos.botonescrud}
              onPress={regresar}>
              Guardar
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
