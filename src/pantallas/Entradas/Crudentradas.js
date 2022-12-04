import Estilos from "../../componentes/Estilos";
import { Text, ScrollView, ImageBackground, View } from "react-native";
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
            <Input size={"lg"} variant="outline" placeholder="YYYY-MM-DD" />
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
            <VStack
              my="4"
              space={5}
              w="100%"
              maxW="300px"
              divider={
                <Box px="2">
                  <Divider />
                </Box>
              }
            >
              <VStack w="100%" space={5} alignSelf="center">
                <Heading fontSize="lg">Agregar producto</Heading>
                <Input
                  placeholder="Search"
                  variant="filled"
                  width="100%"
                  borderRadius="10"
                  py="1"
                  size={"lg"}
                  px="2"
                  InputLeftElement={
                    <Icon
                      ml="2"
                      size="4"
                      color="gray.400"
                      as={<Ionicons name="ios-search" />}
                    />
                  }
                />
              </VStack>
            </VStack>
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
