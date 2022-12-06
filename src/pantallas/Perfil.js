import { Text, View, Button, Image } from "react-native";
import React, { Component, useState, useEffect, useContext } from "react";
import Estilos from "../componentes/Estilos";
import UsuarioContext from "../contexto/UsuarioContext";
import img from "../../assets/img.png";
// export default class Inicio extends Component {
//   render() {
const Perfil = () => {
  const { setCerrarSesion } = useContext(UsuarioContext);
  const cerrarSesion = async () => {
    await setCerrarSesion();
  };
  return (
    <View style={{ justifyContent: "center", flex: 1 }}>
      <Text style={{ fontSize: 20, alignSelf: "center" }}></Text>
      <Button
        style={Estilos.btnLogin}
        title="Cerrar sesión"
        onPress={cerrarSesion}
      ></Button>
    </View>
  );
  //}
};
export default Perfil;
