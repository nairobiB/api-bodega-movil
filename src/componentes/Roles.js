import { View, Image, StyleSheet, Text, Checkbox } from "react-native";
//import Checkbox from 'expo-checkbox';
import { Icon, Group, Button, Divider } from "native-base";
import React, { useState, useEffect, useContext } from "react";
import login from "../../assets/login.jpg";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Estilos from "./Estilos";
import { useNavigation } from "@react-navigation/native";
// const uriImagen = Image.resolveAssetSource(login).uri;
//import { urlImagenesRoles } from '../configuracion/Urls';
const Roles = (props) => {
  const nav = useNavigation();
  const [Check, setCheck] = useState(false);
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
      <Image style={Estilos.imagen} source={login} />
      <View style={Estilos.contenedorTexto}>
        <Text>ID: {props.rol.id}</Text>
        <Text>{props.rol.nombreRol}</Text>
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
            onPress={() =>
              nav.navigate("editar", {
                id: props.rol.id,
              })
            }
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

export default Roles;
