import { View, Image, StyleSheet, Text } from "react-native";
//import Checkbox from 'expo-checkbox';
import { Button, Icon, Group, Divider } from "native-base";
import React, { useState, useEffect, useContext } from "react";
import login from "../../assets/login.jpg";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Estilos from "./Estilos";
import UsuarioContext from "../contexto/UsuarioContext";
import { useNavigation } from "@react-navigation/native";
// const uriImagen = Image.resolveAssetSource(login).uri;
//import { urlImagenesRoles } from '../configuracion/Urls';
const Entradas = (props) => {
  const { token } = useContext(UsuarioContext);

  const nav = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const presionar = () => {
    const id = props.entrada.id;
    const idCliente = props.entrada.idCliente;
    const fechaIngreso = props.entrada.fechaIngreso;
    const idSucursal = props.entrada.idSucursal;
   
    nav.navigate("crudEntrada", { id: id, cliente:idCliente,fechIngreso:fechaIngreso, sucursal:idSucursal});
   
  };
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
        <Text>ID Cliente: {props.entrada.idCliente}</Text>
        <Text>Fecha: {props.entrada.fechaIngreso}</Text>
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
          
          startIcon={<Icon as={Feather}
           name="edit" 
           size={4}></Icon>}
          colorScheme="darkBlue"
          onPress={presionar}


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

export default Entradas;
