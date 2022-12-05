import Estilos from "../../componentes/Estilos";
import { Text, ScrollView, ImageBackground, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Icon,
  Input,
  Button,
  VStack,
  Divider,
  Box,
  Heading,
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import login from "../../../assets/login.jpg";
export default function App() {
  const nav = useNavigation();
  return (
    <ScrollView style={Estilos.container} showsVerticalScrollIndicator={false}>
      <ImageBackground source={login} style={Estilos.banner}>
        <View style={Estilos.firstView}>
          <MaterialIcons name="point-of-sale" size={65} color="white" />
        </View>
      </ImageBackground>
      <View style={Estilos.contenedorBotones}>
        <View style={Estilos.botonNuevo}>
          <Button colorScheme="darkBlue"  onPress={() => nav.navigate("CrudSalidas")}>Agregar nuevo Registro</Button>
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
            <Heading fontSize="lg">Buscar Registro</Heading>
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
    </ScrollView>
  );
}
