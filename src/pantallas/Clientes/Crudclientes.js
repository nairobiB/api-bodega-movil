import Estilos from "../../componentes/Estilos";
import {
  Text,
  ScrollView,
  ImageBackground,
  View,
  DatePickerAndroidStatic,
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
          AGREGAR CLIENTE
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
            <Text style={Estilos.labelCruds}>Nombre completo</Text>
            <Input
              size={"lg"}
              variant="outline"
              placeholder="Ingrese nombre completo del cliente"
            />
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Dirección</Text>
            <Input
              size={"lg"}
              variant="outline"
              placeholder="Ingrese la direccion del cliente"
            />
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Correo</Text>
            <Input
              size={"lg"}
              variant="outline"
              placeholder="Ingrese correo del cliente"
            />
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Telefono</Text>
            <Input
              size={"lg"}
              variant="outline"
              placeholder="Ingrese el número del cliente"
            />
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Fecha de nacimiento</Text>
            <Input size={"lg"} variant="outline" placeholder="YYYY-MM-DD" />
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>RTN</Text>
            <Input
              size={"lg"}
              variant="outline"
              placeholder="Ingrese el RTN del cliente"
            />
          </View>
          <View style={Estilos.contenedorControles}>
            <Text style={Estilos.labelCruds}>Imagen</Text>
            <Button
              leftIcon={
                <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
              }
            >
              Cargar imagen
            </Button>
          </View>

          <View style={Estilos.estados}>
            <Text style={Estilos.labelCruds}>Activo</Text>
            <Switch size="lg" />
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
