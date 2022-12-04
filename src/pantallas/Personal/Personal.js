import Estilos from "../../componentes/Estilos";
import { Text, View, ImageBackground } from "react-native";
import {
  Icon,
  Input,
  VStack,
  Divider,
  Box,
  Heading,
  MaterialIcons,
  Button,
} from "native-base";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import login from "../../../assets/login.jpg";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const nav = useNavigation();

  return (
    <View style={Estilos.container} showsVerticalScrollIndicator={false}>
      <ImageBackground source={login} style={Estilos.banner}>
        <View style={Estilos.firstView}>
          <Fontisto name="persons" size={65} color="white" />
        </View>
      </ImageBackground>

      <View style={Estilos.contenedorBotones}>
        <View style={Estilos.botonNuevo}>
          <Button
            onPress={() => nav.navigate("crudpersonal")}
            colorScheme="darkBlue"
          >
            Agregar nuevo Registro
          </Button>
        </View>
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
            <Heading fontSize="lg">Buscar empleado</Heading>
            <Input
              placeholder="Ingresa el nombre"
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
    </View>
  );
}
