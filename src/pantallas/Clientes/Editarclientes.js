import Estilos from "../../componentes/Estilos";
import { Text, ScrollView, View, TextInput, Alert } from "react-native";
import Axios from "../../componentes/Axios";
import { Icon, Divider, Heading, Switch, Button } from "native-base";
import React, { useState, useEffect, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import UsuarioContext from "../../contexto/UsuarioContext";
export default function App({ route, navigation }) {
  const nav = useNavigation();
  const { token } = useContext(UsuarioContext);
  const { id, oldname, olddir, oldcor, oldtel, oldfecha, oldrtn } =
    route.params;
  const [nombreCompleto, setnombreCompleto] = useState(oldname);
  const [direccion, setDireccion] = useState(olddir);
  const [correo, setCorreo] = useState(oldcor);
  const [telefono, setTelefono] = useState(oldtel);
  const [fechaNac, setFechaNac] = useState(oldfecha);
  const [RTN, setRTN] = useState(oldrtn.toString());
  const [espera, setEspera] = useState(false);
  const [validacionNombre, setValidacionNombre] = useState(false);
  const [validacionDireccion, setValidacionDireccion] = useState(false);
  const [validacionCorreo, setValidacioncorreo] =
    useState(false);
  const [validacionTelefono, setValidacionTelefono] = useState(false);
  const [validacionRTN, setValidacionRTN] = useState(false);
  const [validacionactivo, setValidacionActivo] = useState(false);
  const [validacionFechaNac, setValidacionFechaNac] = useState(false);
    useEffect(() => {
      //console.log('Se ejecuto');
      //console.log(usuario);
      if (!nombreCompleto) {
        setValidacionNombre(true);
      } else if (nombreCompleto.length < 3) {
        setValidacionNombre(true);
      } else {
        setValidacionNombre(false);
      }
  
      if (!direccion) {
        setValidacionDireccion(true);
      } else if (direccion.length < 10) {
        setValidacionDireccion(true);
      } else {
        setValidacionDireccion(false);
      }
      if (!correo) {
        setValidacioncorreo(true);
      } else if (correo.length < 15) {
        setValidacioncorreo(true);
      } else {
        setValidacioncorreo(false);
      }
  
      if (!telefono) {
        setValidacionTelefono(true);
      } else if (telefono.length < 10) {
        setValidacionTelefono(true);
      } else {
        setValidacionTelefono(false);
      }
      if (!fechaNac) {
        setValidacionFechaNac(true);
      } else if (fechaNac.length < 10) {
        setValidacionFechaNac(true);
      } else {
        setValidacionFechaNac(false);
      }
      if (!RTN) {
        setValidacionRTN(true);
      } else if (RTN.length < 10) {
        setValidacionRTN(true);
      } else {
        setValidacionRTN(false);
      }
    }, [nombreCompleto, direccion, correo, telefono, fechaNac]);

  const editcliente = async (data) => {
    
    try {
      textoMensaje = "";
      console.log(nombreCompleto);
      Axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      await Axios.put("/clientes/editar?id=" + id, {
        nombreCompleto: nombreCompleto,
        direccion: direccion,
        correo: correo,
        telefono: telefono,
        fechaNac: fechaNac,
        RTN: RTN,
      })
        .then(async (data) => {
          textoMensaje = "";
          console.log(data);
          const json = data.data;
          if (json.errores.length == 0) {
            nombreCompleto = json.data.nombreCompleto;
            direccion = json.data.direccion;
            correo = json.data.correo;
            telefono = json.data.telefono;
            fechaNac = json.data.fechaNac;
            RTN = json.data.RTN;
          } else {
            json.errores.forEach((element) => {
              textoMensaje += element.mensaje + ". ";
            });
          }
        })
        .catch((error) => {
          textoMensaje = error;
        });
    } catch (error) {
      textoMensaje = error;
      console.log(error);
    }
    console.log(RTN);
  };

  const regresar = () => {
    editcliente();
    nav.goBack();
  };
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
            <Text style={Estilos.labelCruds}>Nombre del empleado</Text>
            <View>
              <TextInput
                value={nombreCompleto}
                onChangeText={setnombreCompleto}
                placeholder="Ingrese el nombre"
                style={Estilos.entradasCrud}
              />
            </View>
            <Text style={Estilos.labelCruds}>Dirección</Text>
            <View>
              <TextInput
                value={direccion}
                onChangeText={setDireccion}
                placeholder="Ingrese la direccion"
                style={Estilos.entradasCrud}
              />
            </View>
            <Text style={Estilos.labelCruds}>Correo electronico</Text>
            <View>
              <TextInput
                value={correo}
                onChangeText={setCorreo}
                placeholder="Ingrese el correo"
                style={Estilos.entradasCrud}
              />
            </View>
            <Text style={Estilos.labelCruds}>Telefono</Text>
            <View>
              <TextInput
                value={telefono}
                onChangeText={setTelefono}
                placeholder="Ingrese el telefono"
                style={Estilos.entradasCrud}
              />
            </View>
            <Text style={Estilos.labelCruds}>Fecha de nacimiento</Text>
            <View>
              <TextInput
                value={fechaNac}
                onChangeText={setFechaNac}
                placeholder="YYYY-MM-DD"
                style={Estilos.entradasCrud}
              />
            </View>
            <Text style={Estilos.labelCruds}>RTN del cliente</Text>
            <View>
              <TextInput
                value={RTN}
                onChangeText={setRTN}
                placeholder="Ingrese el RTN del cliente"
                style={Estilos.entradasCrud}
              />
            </View>
          </View>

          <View style={Estilos.contenedorBotonesCrud}>
            <Button
              color={"#313087"}
              style={Estilos.botonescrud}
              onPress={regresar}
              colorScheme="darkBlue"
            >
              Guardar
            </Button>
            <Button
              color={"#313087"}
              style={Estilos.botonescrud}
              colorScheme="muted"
              onPress={() => nav.goBack()}
            >
              Cancelar
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
