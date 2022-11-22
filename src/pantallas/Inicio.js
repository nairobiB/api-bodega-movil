import { Text, View } from "react-native";
import React, { Component } from "react";

export default class Inicio extends Component {
  render() {
    return (
      <View style={{ justifyContent: "center", flex: 1 }}>
        <Text style={{ alignSelf: "center" }}>
          Bienvenido a la pagina de inicio
        </Text>
      </View>
    );
  }
}
