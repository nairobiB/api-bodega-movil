import { View, Image, StyleSheet, Text, Button } from "react-native";
//import Checkbox from 'expo-checkbox';
import React, { useState, useEffect, useContext } from "react";
import login from "../../assets/login.jpg";
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
    <View style={Estilos.contenedorTipo}>
      <Image style={Estilos.imagen} source={login} />
      <View style={Estilos.contenedorTexto}>
        <Text>ID: {props.rol.id}</Text>
        <Text>{props.rol.nombreRol}</Text>
      </View>
      <View style={Estilos.botonsito}>
        <Button title="Editar"></Button>
        <Button title="Eliminar"></Button>
      </View>
    </View>
  );
};

export default Roles;
