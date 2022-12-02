import Estilos from "../../componentes/Estilos";
import { Text, ScrollView, View } from "react-native";
import { Icon, Input, Button, Divider, Heading, Switch } from "native-base";
import { Ionicons } from "@expo/vector-icons";
export default function App() {
  return (
    <ScrollView style={Estilos.container} showsVerticalScrollIndicator={false}>
      <View style={Estilos.principalView}>
        <Heading
          mx="3"
          alignItems="center"
          flexDirection="row"
          style={{ marginTop: 50 }}
        >
          AGREGAR ROL
        </Heading>
        <Divider
          my="2"
          _light={{
            bg: "muted.800",
          }}
          _dark={{
            bg: "muted.50",
          }}
        />

        <View style={Estilos.contenedorContenido}>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Nombre del rol</Text>
            <Input size={"lg"} variant="outline" placeholder="Ingrese el rol" />
          </View>

          <View style={Estilos.contenedorBotones}>
            <Button style={Estilos.botones} color={"red"}>
              Cancelar
            </Button>
            <Button color={"#313087"} style={Estilos.botones}>
              Guardar
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
