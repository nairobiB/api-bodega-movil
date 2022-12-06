import Estilos from "../../componentes/Estilos";
import {
  Text,
  ScrollView,
  ImageBackground,
  View,
  DatePickerAndroidStatic,
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
import React, { useState, useEffect, useContext } from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";
import Axios from "../../componentes/Axios";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const nav = useNavigation();
  const titulo = "Agregar";
  var textoMensaje = "";
const [espera, setEspera] = useState(false);
const [nombreProducto,setnombreProducto] = useState(null);
const [precioUnitario, setprecioUnitario] = useState(null);
const [precioVenta, setprecioVenta] = useState(null);
const [idCategoria, setidCategoria] = useState(null);
    const [validarnombreProducto,setvalidarnombreProducto] = useState(false);
    const [validarprecioUnitario, setvalidarprecioUnitario] = useState(false);
    const [validarprecioVenta, setvalidarprecioVenta] = useState(false);
    const [validaridCategoria, setvalidaridCategoria] = useState(false);

    useEffect(()=>{
      if(!nombreProducto){
        setvalidarnombreProducto(true);
      } else if(nombreProducto.lenght < 3 && nombreProducto.lenght > 50){
        setvalidarnombreProducto(true);
      } else {
        setvalidarnombreProducto(false);
      }

      if (!precioUnitario) {
        setvalidarprecioUnitario(true);
      } else{
        setvalidarprecioUnitario(false)
      }

      if (!precioVenta) {
        setvalidarprecioVenta(true);
      } else{
        setvalidarprecioVenta(false)
      }

      if (!idCategoria) {
        setvalidaridCategoria(true);
      } else{
        setvalidaridCategoria(false)
      }

    },[nombreProducto,precioUnitario,precioVenta,idCategoria]);

    const guardarProducto = async (data) => {
      try {
        console.log(nombreProducto);
        await Axios.post("/productos/guardar", {
          nombreProducto: data.nombreProducto,
          precioUnitario: data.precioUnitario,
          precioVenta: data.precioVenta,
          idCategoria: data.idCategoria,
        })
          .then(async (data) => {
            const json = data.data;
            if (json.errores.length == 0) {
              nombreProducto = json.data.nombreProducto,
              precioUnitario= json.data.precioUnitario,
              precioVenta = json.data.precioVenta,
              idCategoria = json.data.idCategoria;
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
      if (!validarnombreProducto || !validarprecioUnitario || !validarprecioVenta || !validaridCategoria) {
        setEspera(true);
        await guardarProducto({ nombreProducto: nombreProducto, 
        precioUnitario: precioUnitario,
        precioVenta: precioVenta,
        idCategoria: idCategoria
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
            <Text style={Estilos.labelCruds}>Nombre del producto</Text>
            <Input
              value={nombreProducto}
              onChangeText={setnombreProducto}
              size={"lg"}
              variant="outline"
              placeholder="Ingrese el nombre completo del producto"
            />
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Precio unitario</Text>
            <Input
              value={precioUnitario}
              onChangeText={setprecioUnitario}
              size={"lg"}
              variant="outline"
              placeholder="Ingrese el precio unitario del producto"
            />
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Precio de venta</Text>
            <Input
              value={precioVenta}
              onChangeText={setprecioVenta}
              size={"lg"}
              variant="outline"
              placeholder="Ingrese el precio de venta del producto"
            />
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Categoria</Text>
            <Input
              value={idCategoria}
              onChangeText={setidCategoria}
              size={"lg"}
              variant="outline"
              placeholder="Ingrese la categoria del producto"
            />
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Imagen</Text>
            <Button
              leftIcon={
                <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
              }
            >
              Cargar imagen
            </Button>
          
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
