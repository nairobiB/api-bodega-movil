import { View, Image, StyleSheet, Text } from "react-native";
//import Checkbox from 'expo-checkbox';
import { Button, Icon, Group, Divider } from "native-base";
import React, { useState, useEffect, useContext } from "react";
import login from "../../assets/login.jpg";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Estilos from "./Estilos";
// const uriImagen = Image.resolveAssetSource(login).uri;
//import { urlImagenesRoles } from '../configuracion/Urls';
const Salidas = (props) => {
  // const [imagen, setImagen] = useState(uriImagen);
  // useEffect(() =>{
  //     setImagen(cargarImagen);
  //     // setCheck(props.rol.activo);
  // }, []);

  // const cargarImagen = () =>{
  //     console.log(props.rol.imagen);
  //     if(props.rol.imagen == null){
  //         setImagen(uriImagen);
  //     }
  //     else{
  //         setImagen(urlImagenesRoles + props.rol.imagen);
  //     }
  //     return imagen;
  // }
  return (
    <View style={Estilos.contenedorTipo}>
      <View style={Estilos.contenedorTexto}>
        <Text>ID: {props.salida.id}</Text>
        <Text>ID Cliente:{props.salida.idCliente}</Text>
        <Text>Fecha:{props.salida.fecha_Salida}</Text>
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
  );
};

export default Salidas;