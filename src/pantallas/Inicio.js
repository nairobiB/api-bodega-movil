import { Text, View, Button, Image } from "react-native";

import Estilos from "../componentes/Estilos";

import img from "../../assets/img.png";
// export default class Inicio extends Component {
//   render() {
const Inicio = () => {
  return (
    <View style={{ justifyContent: "center", flex: 1 }}>
      <Image source={img} style={{ alignSelf: "center" }}></Image>
      <Text style={{ fontSize: 20, alignSelf: "center" }}>
        Bienvenido a la app para administrar
      </Text>
      <Text style={{ fontSize: 20, alignSelf: "center" }}>
        Bodega "Todo Cabe"
      </Text>
    </View>
  );
  //}
};
export default Inicio;
