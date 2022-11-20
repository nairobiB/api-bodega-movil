import { Dimensions, StyleSheet } from "react-native";
const Estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  imagenLogin: {
    height: Dimensions.get("window").height / 2.6,
  },
  firstView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textoTitulo: {
    color: "#ffffff",
    fontSize: 45,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
export default Estilos;
