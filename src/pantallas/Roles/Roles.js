// import Estilos from "../../componentes/Estilos";
// import { Text, ScrollView, ImageBackground, View } from "react-native";
// import {
//   Icon,
//   Input,
//   Button,
//   VStack,
//   Divider,
//   Box,
//   Heading,
//   MaterialIcons,
// } from "native-base";
// import { Ionicons, Octicons } from "@expo/vector-icons";
// import login from "../../../assets/login.jpg";
// import { useNavigation } from "@react-navigation/native";

// export default function App() {
//   const nav = useNavigation();

//   return (
//     <ScrollView style={Estilos.container} showsVerticalScrollIndicator={false}>
//       <ImageBackground source={login} style={Estilos.banner}>
//         <View style={Estilos.firstView}>
//           <Octicons name="people" size={65} color="white" />
//         </View>
//       </ImageBackground>
//       <View style={{ marginTop: 30 }}>
//         <Button
//           style={Estilos.botonNuevo}
//           onPress={() => nav.navigate("crudroles")}
//         >
//           Agregar nuevo rol
//         </Button>
//       </View>

//       <View style={Estilos.busqueda}>
//         <VStack
//           my="4"
//           space={5}
//           w="100%"
//           maxW="300px"
//           divider={
//             <Box px="2">
//               <Divider />
//             </Box>
//           }
//         >
//           <VStack w="100%" space={5} alignSelf="center">
//             <Heading fontSize="lg">Buscar roles</Heading>
//             <Input
//               placeholder="Search"
//               variant="filled"
//               width="100%"
//               borderRadius="10"
//               py="1"
//               size={"lg"}
//               px="2"
//               InputLeftElement={
//                 <Icon
//                   ml="2"
//                   size="4"
//                   color="gray.400"
//                   as={<Ionicons name="ios-search" />}
//                 />
//               }
//             />
//           </VStack>
//         </VStack>
//       </View>
//     </ScrollView>
//   );
// }
import {
  Text,
  View,
  Button,
  ImageBackground,
  TextInput,
  Alert,
  FlatList,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import Estilos from "../../componentes/Estilos";
import login from "../../../assets/login.jpg";
import UsuarioContext from "../../contexto/UsuarioContext";
import Cargando from "../../componentes/Cargando";
import Rol from "../../componentes/Roles";
import Axios from "../../componentes/Axios";
import { Heading } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Octicons } from "@expo/vector-icons";
const Roles = ({ navigation }) => {
  const { token } = useContext(UsuarioContext);
  const [Filtro, setFiltro] = useState(null);
  const [lista, setLista] = useState([]);
  const [validarFiltro, setValidarFiltro] = useState(false);
  const [espera, setEspera] = useState(false);
  const titulo = "Lista de Roles";
  const nav = useNavigation();
  useEffect(() => {
    BuscarRolesTodos();
  }, []);
  useEffect(() => {
    if (!Filtro) {
      setValidarFiltro(true);
    } else if (Filtro.length < 2) {
      setValidarFiltro(true);
    } else {
      setValidarFiltro(false);
    }
  }, [Filtro]);
  useEffect(() => {
    if (!validarFiltro) {
      BuscarRoles();
    }
  }, [validarFiltro]);
  const BuscarRoles = async () => {
    if (!validarFiltro) {
      var textoMensaje = "";
      setEspera(true);
      Axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      await Axios.get("/roles/buscarnombreRol?nombreRol=" + Filtro + "%") //BUSCA EL LOGIN DEL USUARIO
        .then(async (data) => {
          const json = data.data;
          setLista(json);
          console.log(json);
          // if (json.errores.length == 0) {
          //     textoMensaje = "Datos cargados";
          //     setLista(json.data);
          // }
          // else {
          //     textoMensaje = '';
          //     json.errores.forEach(element => {
          //         textoMensaje += element.mensaje + '. ';
          //     });
          // }
        })
        .catch((er) => {
          console.log(er);
        });
      setEspera(false);
    } else {
      Alert.alert(titulo, "Debe enviar los datos correctos");
    }
  };
  const BuscarRolesTodos = async () => {
    var textoMensaje = "";
    setEspera(true);
    Axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    await Axios.get("/roles/listar")
      .then(async (data) => {
        const json = data.data;

        setLista(json);
        console.log(json);
        // if (json.errores.length == 0) {
        //     setLista(json.data);
        // }
        // else {
        //     textoMensaje = '';
        //     json.errores.forEach(element => {
        //         textoMensaje += element.mensaje + '. ';
        //     });
        // }
      })
      .catch((er) => {
        console.log(er);
      });
    setEspera(false);
    if (textoMensaje != "") {
      Alert.alert(titulo, textoMensaje);
    }
  };
  return (
    <View style={Estilos.container}>
      <ImageBackground source={login} style={Estilos.banner}>
        <View style={Estilos.firstView}>
          <Octicons name="people" size={65} color="white" />
        </View>
      </ImageBackground>
      <View style={Estilos.contenedorBotonesAgregar}>
        <Button
          style={Estilos.botonNuevo}
          color={"green"}
          onPress={() => nav.navigate("crudroles")}
          title="Agregar nuevo Registro"
        ></Button>
      </View>

      <View style={Estilos.contenedorContenido}>
        {espera ? (
          <Cargando texto="Estableciendo conexion con la API"></Cargando>
        ) : (
          <>
            <View style={Estilos.contenedorControles}>
              <Heading fontSize="lg">Buscar Registro</Heading>
              <TextInput
                style={
                  validarFiltro ? Estilos.entradas_error : Estilos.entradas
                }
                placeholder="Escriba el nombre del rol"
                value={Filtro}
                onChangeText={setFiltro}
              ></TextInput>
              {validarFiltro ? (
                <>
                  <Text style={Estilos.etiqueta_error}>
                    Debe escribir el nombre del rol
                  </Text>
                </>
              ) : (
                <></>
              )}
            </View>
            <View style={Estilos.contenedorBotones}>
              <View style={Estilos.botones}>
                <Button
                  title="Ver Todos"
                  color={"#313087"}
                  onPress={BuscarRolesTodos}
                ></Button>
              </View>
            </View>
            <View style={Estilos.contenedorControles}>
              <FlatList
                data={lista}
                renderItem={({ item }) => <Rol rol={item}></Rol>}
                keyExtractor={(item) => item.id}
              />
            </View>
          </>
        )}
      </View>
      <View style={{ height: 150 }}></View>
    </View>
  );
};
export default Roles;
