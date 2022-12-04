import { Center } from "native-base";
import { Dimensions, StyleSheet } from "react-native";
const Estilos = StyleSheet.create({
  //ESTILO DE PANTALLAS
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  imagenLogin: {
    height: Dimensions.get("window").height / 2.5,
  },
  banner: {
    height: Dimensions.get("window").height / 6,
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
    textAlign: "center",
  },
  labelLogin: {
    fontSize: 20,
    marginBottom: 15,
    marginTop: 15,
    color: "#6c757d",
  },
  etiquetas: {
    fontSize: 20,
    marginBottom: 5,
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
    width: 250,
    height: 50,
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
  entradas: {
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 4,
    padding: 7,
    fontSize: 14,
    marginBottom: 2,
  },
  entradas_error: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 4,
    padding: 7,
    fontSize: 14,
    marginBottom: 2,
  },
  etiqueta_error: {
    fontSize: 12,
    marginBottom: 1,
    marginLeft: 5,
    color: "red",
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
  contenedorBotonesAgregar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
  botones: {
    flex: 1,
    alignItems: "stretch",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  //ESTILO COMPONENTES
  imagen: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 90,
  },
  contenedorTipo: {
    alignItems: "stretch",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
    margin: 10,
    padding: 10,
    backgroundColor: "#ffffff",
    flexDirection: "row",
  },
  contenedorTexto: {
    justifyContent: "center",
    alignContent: "space-around",
    padding: 10,
    flexDirection: "column",
  },
  contenedorActivo: {
    alignItems: "stretch",
    justifyContent: "flex-start",
    flexDirection: "row",
    margin: 5,
  },
  botonsito: {
    alignItems: "stretch",
    justifyContent: "flex-end",
  },
});

export default Estilos;
