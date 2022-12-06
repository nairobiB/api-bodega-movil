import { View, Image, StyleSheet, Text, Checkbox } from "react-native";
//import Checkbox from 'expo-checkbox';
import { Icon,
  Group,
  Button,
  Divider,
  Modal,
  FormControl,
  Input, } from "native-base";
import React, { useState, useEffect, useContext } from "react";
import login from "../../assets/nulo.png";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Estilos from "./Estilos";
import { useNavigation } from "@react-navigation/native";
const uriImagen = Image.resolveAssetSource(login).uri; 
import { urlImagenesProductos } from "../configuraciones/Urls";
import UsuarioContext from "../contexto/UsuarioContext";
import Axios from "./Axios";
const Productos = (props) => {
  const { token } = useContext(UsuarioContext);
  const nav = useNavigation();
  const [Check, setCheck] = useState(false);
  const [imagen, setImagen] = useState(uriImagen);
  const [showModal, setShowModal] = useState(false);
  const presionar = () => {
    const id = props.producto.id;
    const nombreProducto = props.producto.nombreProducto;
    const precioUnitario = props.producto.precioUnitario;
    const precioVenta = props.producto.precioVenta;
    const idCategoria = props.producto.idCategoria;
    nav.navigate("editar", { id: id, nombreantiguo: nombreProducto, preciouniantiguo:precioUnitario, preciovenantiguo:precioVenta, idcategantiguo: idCategoria  });
    console.log(id, nombreProducto, precioUnitario, precioVenta, idCategoria);
  };
  useEffect(() => {
    setImagen(cargarImagen);
    // setCheck(props.usuario.activo);
  }, []);

  const cargarImagen = () => {
    console.log(props.producto.imagen);
    if (props.producto.imagen == null) {
      setImagen(uriImagen);
    } else {
      setImagen(urlImagenesProductos + props.producto.imagen);
    }
    return imagen;
  };

  const eliminar = async (data) => {
    var textoMensaje = "";
    try {
      Axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      await Axios.delete("/productos/eliminar?id=" + props.producto.id)

        .then(async (data) => {
          console.log(data);
          const json = data.data;
          if (json.errores.length == 0) {
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
    setShowModal(false);
  };
  return (
    <View style={Estilos.contenedorTipo}>
      <Image style={Estilos.imagen} source={{ uri: imagen }} />
      <View style={Estilos.contenedorTexto}>
        <Text>ID: {props.producto.id}</Text>
        <Text>Producto: {props.producto.nombreProducto}</Text>
        <Text>Precio: {props.producto.precioVenta}</Text>
      </View>
      <Divider
        my="3"
        _light={{
          bg: "muted.800",
        }}
        _dark={{
          bg: "muted.50",
        }}
      />
      <View>
        <View style={Estilos.contenedorB}>
          <Button
            onPress={presionar}
            startIcon={<Icon as={Feather} name="edit" size={4}></Icon>}
            colorScheme="darkBlue"
          >
            Editar
          </Button>
          <Button
            startIcon={<Icon as={MaterialIcons} name="delete" size={4}></Icon>}
            variant="solid"
            colorScheme="red"
            onPress={() => setShowModal(true)}
          >
            Eliminar
          </Button>
        </View>
      </View>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Eliminar registro</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Nombre del producto</FormControl.Label>
              <Input value={props.producto.nombreProducto} editable={false} />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancelar
              </Button>
              <Button variant="solid" colorScheme="red" onPress={eliminar}>
                Eliminar
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default Productos;
