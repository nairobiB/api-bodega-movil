import { View, Image, StyleSheet, Text } from "react-native";
//import Checkbox from 'expo-checkbox';
import { Button, Icon, Group, Divider } from "native-base";
import React, { useState, useEffect, useContext } from "react";
import login from "../../assets/login.jpg";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Estilos from "./Estilos";
import { useNavigation } from "@react-navigation/native";

const Salidas = (props) => {
  const nav = useNavigation();
  const presionar = () =>{
    const id = props.salida.id;

    nav.navigate("CrudSalida", {id:id});
    console.log(id);
  }
  
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

export default Salidas;
