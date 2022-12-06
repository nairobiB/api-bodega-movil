import Estilos from "../../componentes/Estilos";
import {
  Text,
  ScrollView,
  ImageBackground,
  View
} from "react-native";
import {
  Icon,
  Input,
  Button,
  VStack,
  Divider,
  Box,
  Heading,
  MaterialIcons,
  Switch,
} from "native-base";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function App({route,navigation}) {
  const nav = useNavigation();
  const { id } = route.params
  return (
    <ScrollView style={Estilos.container} showsVerticalScrollIndicator={false}>
      <View style={Estilos.principalView}>
        <Heading
          mx="3"
          alignItems="center"
          flexDirection="row"
          style={{ marginTop: 50 }}
        >
          AGREGAR REGISTRO
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
            <Text style={Estilos.labelCruds}>Cliente</Text>
            <Input
              size={"lg"}
              variant="outline"
              placeholder="Ingrese nombre del cliente"
            />
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Fecha de ingreso</Text>
            <Input
              size={"lg"}
              variant="outline"
              placeholder="YYYY-MM-DD"
            />
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Sucursal</Text>
            <Input
              size={"lg"}
              variant="outline"
              placeholder="Nombre sucursal"
            />
          </View>

          <View style={Estilos.busqueda}>

          <View style={Estilos.contenedorBotonesAgregar}>
                <Button
                  onPress={() => nav.navigate("DetallesSalidas",{id:id})}
                  colorScheme="darkBlue"
                >
                  Agregar nuevo Producto
                </Button>

          </View>
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

