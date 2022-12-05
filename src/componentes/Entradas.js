import { View, Image, StyleSheet, Text } from "react-native";
//import Checkbox from 'expo-checkbox';
import { Button, Icon, Group, Divider } from "native-base";
import React, { useState, useEffect, useContext } from "react";
import login from "../../assets/login.jpg";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Estilos from "./Estilos";
// const uriImagen = Image.resolveAssetSource(login).uri;
//import { urlImagenesRoles } from '../configuracion/Urls';
const Entradas = (props) => {
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
        <Text>ID: {props.entrada.id}</Text>
        <Text>ID Cliente:{props.entrada.idCliente}</Text>
        <Text>Fecha:{props.entrada.fechaIngreso}</Text>
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
        {/* <Button title="Editar" color={"#313087"}></Button>
        <Button title="Eliminar" color={"#852834"}></Button> */}
        <Button.Group
          isAttached
          mx={{
            base: "auto",
            md: 0,
          }}
          size="50px"
        >
          <Button
            startIcon={<Icon as={Feather} name="edit" size={6}></Icon>}
            colorScheme="darkBlue"
          ></Button>
          <Button
            startIcon={<Icon as={MaterialIcons} name="delete" size={7}></Icon>}
            variant="solid"
            colorScheme="red"
          ></Button>
        </Button.Group>
      </View>
    </View>
  );
};

export default Entradas;