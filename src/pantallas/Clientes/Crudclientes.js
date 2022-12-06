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
//   Switch,
// } from "native-base";
// import { Ionicons, Entypo } from "@expo/vector-icons";
// export default function App() {
//   return (
//     <ScrollView style={Estilos.container} showsVerticalScrollIndicator={false}>
//       <View style={Estilos.principalView}>
//         <Divider
//           my="2"
//           _light={{
//             bg: "muted.800",
//           }}
//           _dark={{
//             bg: "muted.50",
//           }}
//         />

//         <View style={Estilos.contenedorContenido}>
//           <View style={Estilos.contenedorControles}>
//             <Text style={Estilos.labelCruds}>Nombre completo</Text>
//             <Input
//               size={"lg"}
//               variant="outline"
//               placeholder="Ingrese nombre completo del cliente"
//             />
//           </View>
//           <View style={Estilos.contenedorControles}>
//             <Text style={Estilos.labelCruds}>Dirección</Text>
//             <Input
//               size={"lg"}
//               variant="outline"
//               placeholder="Ingrese la direccion del cliente"
//             />
//           </View>
//           <View style={Estilos.contenedorControles}>
//             <Text style={Estilos.labelCruds}>Correo</Text>
//             <Input
//               size={"lg"}
//               variant="outline"
//               placeholder="Ingrese correo del cliente"
//             />
//           </View>
//           <View style={Estilos.contenedorControles}>
//             <Text style={Estilos.labelCruds}>Telefono</Text>
//             <Input
//               size={"lg"}
//               variant="outline"
//               placeholder="Ingrese el número del cliente"
//             />
//           </View>
//           <View style={Estilos.contenedorControles}>
//             <Text style={Estilos.labelCruds}>Fecha de nacimiento</Text>
//             <Input size={"lg"} variant="outline" placeholder="YYYY-MM-DD" />
//           </View>
//           <View style={Estilos.contenedorControles}>
//             <Text style={Estilos.labelCruds}>RTN</Text>
//             <Input
//               size={"lg"}
//               variant="outline"
//               placeholder="Ingrese el RTN del cliente"
//             />
//           </View>
//           <View style={Estilos.contenedorControles}>
//             <Text style={Estilos.labelCruds}>Imagen</Text>
//             <Button
//               leftIcon={
//                 <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
//               }
//             >
//               Cargar imagen
//             </Button>
//           </View>

//           <View style={Estilos.estados}>
//             <Text style={Estilos.labelCruds}>Activo</Text>
//             <Switch size="lg" />
//           </View>
//           <View style={Estilos.contenedorBotones}>
//             <Button style={Estilos.botones} color={"red"}>
//               Cancelar
//             </Button>
//             <Button color={"#313087"} style={Estilos.botones}>
//               Guardar
//             </Button>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

import Estilos from "../../componentes/Estilos";
import { Text, ScrollView, View, TextInput, Alert } from "react-native";
import Axios from "../../componentes/Axios";
import { Icon, Divider, Heading, Switch, Button } from "native-base";
import React, { useState, useEffect, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import UsuarioContext from "../../contexto/UsuarioContext";
export default function App() {
  const nav = useNavigation();
  const { token } = useContext(UsuarioContext);
  const [nombreCompleto, setnombreCompleto] = useState(null);
  const [direccion, setDireccion] = useState(null);
  const [correo, setcorreo] = useState(null);
  const [telefono, setTelefono] = useState(null);
  const [fechaNac, setFechaNac] = useState(null);
  const [RTN, setRTN] = useState(null);
  const [activo, setActivo] = useState(null);
  const [espera, setEspera] = useState(false);
  const [validacionNombre, setValidacionNombre] = useState(false);
  const [validacionCorreo, setValidacioncorreo] = useState(false);
  const [validacionDireccion, setValidacionDireccion] = useState(false);
  const [validacionactivo, setValidacionActivo] = useState(false);
  const [validacionRTN, setValidacionRTN] =
    useState(false);
  const [validacionTelefono, setValidacionTelefono] = useState(false);

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
    if (!activo) {
      setValidacionActivo(true);
    } else if (RTN.length < 10) {
      setValidacionActivo(true);
    } else {
      setValidacionActivo(false);
    }
  }, [nombreCompleto, direccion, correo, telefono, fechaNac, activo]);

  const guardarpersonal = async (data) => {
    try {
      var textoMensaje = "";
      console.log(nombreCompleto);
      
      await Axios.post("/clientes/guardar", {
        nombreCompleto: data.nombreCompleto,
        direccion: data.direccion,
        correo: data.correo,
        telefono: data.telefono,
        fechaNac: data.fechaNac,
        RTN: data.RTN,
        activo: data.activo,
      })
        .then(async (data) => {
          const json = data.data;
          if (json.errores.length == 0) {
            nombreCompleto = json.data.nombreCompleto;
            (direccion = json.data.direccion),
              (correo = json.data.correo),
              (telefono = json.data.telefono),
              (fechaNac = json.data.fechaNac),
              (RTN = json.data.RTN),
              (activo = json.data.activo)
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
  };

  const agregar = async () => {
    if (!validacionNombre || !validacionDireccion || !validacionCorreo || 
      !validacionTelefono || !validacionFechaNac || !validacionRTN || !validacionactivo) {
      setEspera(true);
      await guardarpersonal({
        nombreCompleto: nombreCompleto,
        direccion: direccion,
        correo: correo,
        telefono: telefono,
        fechaNac: fechaNac,
        RTN: RTN,
      });
      setEspera(false);
    } else {
      Alert.alert(titulo, "Debe enviar los datos correctos");
    }
  };
  const regresar = () => {
    agregar();
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
            <Text style={Estilos.labelCruds}>Correo Personal</Text>
            <View>
              <TextInput
                value={correo}
                onChangeText={setcorreo}
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
            {/* <Button
              color={"#313087"}
              style={Estilos.botones}
              onPress={agregar}
              title="Guardar"
            />
            <Button
              color={"#313087"}
              style={Estilos.botones}
              onPress={agregar}
              title="Cancelar"
            /> */}
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
