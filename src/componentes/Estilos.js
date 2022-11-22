import { Center } from "native-base";
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
  busqueda: {
    flex: 1,
    alignItems: "center",
    marginTop: 0,
  },
  botonNuevo: {
    alignSelf: "center",
    backgroundColor: "green",

    width: Dimensions.get("window").width / 1.5,
    borderRadius: 40,
  },

  principalView: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  contenedorContenido: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
    width: "100%",
    padding: 20,
  },
  contenedorControles: {
    flexDirection: "column",
    marginTop: 5,
    marginBottom: 5,
  },
  labelCruds: {
    fontSize: 20,
    marginBottom: 15,
    marginTop: 15,
    color: "#28272c",
  },
  estados: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },
  contenedorBotones: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    marginBottom: 10,
  },
  botones: {
    flex: 1,
    alignItems: "stretch",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Estilos;
