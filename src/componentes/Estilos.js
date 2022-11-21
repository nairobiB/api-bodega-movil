import { Dimensions, StyleSheet } from "react-native";
const Estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  imagenLogin: {
    height: Dimensions.get("window").height / 2.5,
  },
  firstView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textoTitulo: {
    color: "white",
    fontSize: 30,
    marginTop: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: "white",
    bottom: 50,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  textoInicio: {
    color: "#302a8a",
    fontSize: 30,
    fontWeight: "500",
  },
  labelLogin: {
    fontSize: 20,
    marginBottom: 15,
    marginTop: 15,
    color: "#6c757d",
  },
  btnLogin: {
    alignSelf: "center",
    backgroundColor: "#302a8a",
    width: Dimensions.get("window").width / 1.5,
    borderRadius: 40,
  },
});
export default Estilos;
