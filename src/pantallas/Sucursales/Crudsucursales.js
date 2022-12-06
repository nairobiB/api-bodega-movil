// import Estilos from "../../componentes/Estilos";
// import {
//   Text,
//   ScrollView,
//   ImageBackground,
//   View,
//   DatePickerAndroidStatic,
// } from "react-native";
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
//             <Text style={Estilos.labelCruds}>Nombre de la sucursal</Text>
//             <Input
//               size={"lg"}
//               variant="outline"
//               placeholder="Ingrese nombre de la sucursal"
//             />
//           </View>
//           <View style={Estilos.contenedorControles}>
//             <Text style={Estilos.labelCruds}>Dirección</Text>
//             <Input
//               size={"lg"}
//               variant="outline"
//               placeholder="Ingrese la Direccion de la sucursal"
//             />
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
export default function App() {
  const nav = useNavigation();
  const [nombreSucursal, setnombreSucursal] = useState(null);
  const [Direccion, setDireccion] = useState(null);
  const [validarSucursal, setValidarSucursal] = useState(false);
  const [validarDireccion, setValidarDireccion] = useState(false);
  const [espera, setEspera] = useState(false);
  const titulo = "Agregar";
  var textoMensaje = "";
  useEffect(() => {
    if (!nombreSucursal) {
      setValidarSucursal(true);
    } else if (nombreSucursal.length < 3 && nombreSucursal.length > 50) {
      setValidarSucursal(true);
    } else {
      setValidarSucursal(false);
    }
    if (!Direccion) {
      setValidarDireccion(true);
    } else if (Direccion.length < 3 && Direccion.length > 50) {
      setValidarDireccion(true);
    } else {
      setValidarDireccion(false);
    }
  }, [nombreSucursal, Direccion]);

  const guardarSucursal = async (data) => {
    try {
      await Axios.post("/sucursales/guardar", {
        nombreSucursal: data.nombreSucursal,
        Direccion: data.Direccion,
      })
        .then(async (data) => {
          const json = data.data;
          if (json.errores.length == 0) {
            nombreSucursal = json.data.nombreSucursal;
            Direccion = json.data.Direccion;
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

  // const agregar = async () => {
  //   if (!validarSucursal) {
  //     setEspera(true);
  //     await guardarSucursal({ nombreSucursal: nombreSucursal });
  //     setEspera(false);
  //   }
  //   else if (!validarDireccion) {
  //     setEspera(true);
  //     await guardarSucursal({ Direccion: Direccion });
  //     setEspera(false);
  //   } else {
  //     Alert.alert(titulo, "Debe enviar los datos correctos");
  //   }
  // };

  const agregar = async () => {
    if (!validarSucursal || !validarDireccion) {
      setEspera(true);
      await guardarSucursal({ nombreSucursal: nombreSucursal, Direccion: Direccion });
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
            <Text style={Estilos.labelCruds}>Nombre de la sucursal</Text>
            <View>
              <TextInput
                value={nombreSucursal}
                onChangeText={setnombreSucursal}
                placeholder="Ingrese la sucursal"
                style={Estilos.entradasCrud}
              />
            </View>
            <Text style={Estilos.labelCruds}>Direccion de la sucursal</Text>
            <View>
              <TextInput
                value={Direccion}
                onChangeText={setDireccion}
                placeholder="Ingrese la Direccion"
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
              onPress={regresar}
            >
              Cancelar
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
