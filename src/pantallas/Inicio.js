import { Text, View, Button } from "react-native";
import React, { Component, useState, useEffect, useContext } from "react";
import Estilos from "../componentes/Estilos";
import UsuarioContext from "../contexto/UsuarioContext";

// export default class Inicio extends Component {
//   render() {
const Inicio = () => {
  const { setCerrarSesion } = useContext(UsuarioContext);
  const cerrarSesion = async () => {
    await setCerrarSesion();
  };
  return (
    <View style={{ justifyContent: "center", flex: 1 }}>
      <Text style={{ alignSelf: "center" }}>
        Bienvenido a la pagina de inicio
      </Text>
      <Button
        style={Estilos.btnLogin}
        title="Cerrar sesión"
        onPress={cerrarSesion}
      ></Button>
    </View>
  );
  //}
};
export default Inicio;
