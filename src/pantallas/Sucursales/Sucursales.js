import Estilos from "../../componentes/Estilos";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  Alert,
  FlatList,
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
} from "native-base";
import React, { useState, useEffect, useContext } from "react";
import UsuarioContext from "../../contexto/UsuarioContext";
import login from "../../../assets/login.jpg";
import Cargando from "../../componentes/Cargando";
import Sucursal from "../../componentes/Sucursales";
import Axios from "../../componentes/Axios";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SucursalesO = ({  }) => {
  const { token } = useContext(UsuarioContext);
  const [Filtro, setFiltro] = useState(null);
  const [lista, setLista] = useState([]);
  const [validarFiltro, setValidarFiltro] = useState(false);
  const [espera, setEspera] = useState(false);
  const titulo = "Lista de Sucursales";
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
      await Axios.get("/sucursales/BuscarNombre?nombreSucursal=" + Filtro + "%") //BUSCA EL LOGIN DEL USUARIO
        .then(async (data) => {
          const json = data.data;
          setLista(json);
          // console.log(json);
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
    await Axios.get("/sucursales/listar")
      .then(async (data) => {
        const json = data.data;

        setLista(json);
        // console.log(json);
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
      <View style={Estilos.contenedorBotones}>
        <View style={Estilos.botonNuevo}>
          <Button
            onPress={() => nav.navigate("crudsucursales")}
            colorScheme="darkBlue"
          >
            Agregar nuevo Registro
          </Button>
        </View>
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
                placeholder="Escriba el nombre del sucursal"
                value={Filtro}
                onChangeText={setFiltro}
              ></TextInput>
              {validarFiltro ? (
                <>
                  <Text style={Estilos.etiqueta_error}>
                    Debe escribir el nombre de la sucursal
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
                  onPress={BuscarRolesTodos}
                  colorScheme="trueGray"
                >
                  Ver Todos
                </Button>
              </View>
            </View>
            <View style={Estilos.contenedorControles}>
              <FlatList
                data={lista}
                renderItem={({ item }) => <Sucursal sucursal={item}></Sucursal>}
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

export default SucursalesO;
