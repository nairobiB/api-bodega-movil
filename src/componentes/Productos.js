import { View, Image, StyleSheet, Text, Checkbox } from "react-native";
//import Checkbox from 'expo-checkbox';
import { Icon, Group, Button, Divider } from "native-base";
import React, { useState, useEffect, useContext } from "react";
import login from "../../assets/nulo.png";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Estilos from "./Estilos";

const uriImagen = Image.resolveAssetSource(login).uri;
import { urlImagenesProductos } from "../configuraciones/Urls";
const Productos = (props) => {
  const [Check, setCheck] = useState(false);
  const [imagen, setImagen] = useState(uriImagen);
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
            startIcon={<Icon as={Feather} name="edit" size={4}></Icon>}
            colorScheme="darkBlue"
          >
            Editar
          </Button>
          <Button
            startIcon={<Icon as={MaterialIcons} name="delete" size={4}></Icon>}
            variant="solid"
            colorScheme="red"
          >
            Eliminar
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Productos;
