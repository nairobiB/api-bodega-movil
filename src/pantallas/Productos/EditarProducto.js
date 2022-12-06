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
import UsuarioContext from "../../contexto/UsuarioContext";

export default function App({ route, navigation }) {
  const nav = useNavigation();
  const titulo = "Editar";
  var textoMensaje = "";
  const { token } = useContext(UsuarioContext);
  const { id, nombreantiguo, preciouniantiguo, preciovenantiguo, idcategantiguo } = route.params;
const [espera, setEspera] = useState(false);
const [nombreProducto,setnombreProducto] = useState(nombreantiguo);
const [precioUnitario, setprecioUnitario] = useState(preciouniantiguo.toString());
const [precioVenta, setprecioVenta] = useState(preciovenantiguo.toString());
const [idCategoria, setidCategoria] = useState(idcategantiguo.toString());
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

    const editarProducto = async (data) => {
      var textoMensaje = "";
      try {
        console.log(nombreProducto);
        Axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        await Axios.put("/productos/editar?id=" + id, {
          nombreProducto: data.nombreProducto,
          precioUnitario: data.precioUnitario,
          precioVenta: data.precioVenta,
          idCategoria: data.idCategoria,
        })
  
          .then(async (data) => {
            console.log(data);
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
      if (!validarnombreProducto || !validarprecioUnitario || !validarprecioVenta || !validaridCategoria) {
        setEspera(true);
        await editarProducto({ nombreProducto: nombreProducto, 
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
          </View>
          <View style={Estilos.contenedorBotonesCrud}>
            <Button style={Estilos.botonescrud} color={"red"}>
              Cancelar
            </Button>
            <Button color={"#313087"} style={Estilos.botonescrud}
              onPress={regresar}>
              Editar
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
