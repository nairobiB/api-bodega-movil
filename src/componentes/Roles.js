import { View, Image, StyleSheet, Text } from "react-native";
//import Checkbox from 'expo-checkbox';
import { Button, Icon, Group } from "native-base";
import React, { useState, useEffect, useContext } from "react";
import login from "../../assets/login.jpg";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Estilos from "./Estilos";

// const uriImagen = Image.resolveAssetSource(login).uri;
//import { urlImagenesRoles } from '../configuracion/Urls';
const Roles = (props) => {
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
    <View style={Estilos.contenedorcomponente}>
      <View style={Estilos.contenedorTipo}>
        <Image style={Estilos.imagen} source={login} />
        <View style={Estilos.contenedorTexto}>
          <Text>ID: {props.rol.id}</Text>
          <Text>{props.rol.nombreRol}</Text>
        </View>
      </View>
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

export default Roles;
