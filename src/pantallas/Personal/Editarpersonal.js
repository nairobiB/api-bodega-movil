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
  const { id, oldname, olddir, oldcor, oldtel, oldfecha, oldrol, oldsuc } =
    route.params;
  const [nombreCompleto, setnombreCompleto] = useState(oldname);
  const [direccion, setDireccion] = useState(olddir);
  const [correo_Personal, setcorreo_Personal] = useState(oldcor);
  const [telefono, setTelefono] = useState(oldtel);
  const [fechaNac, setFechaNac] = useState(oldfecha);
  const [RolId, setRolId] = useState(oldrol.toString());
  const [SucursalId, setSucursalId] = useState(oldsuc.toString());
  const [espera, setEspera] = useState(false);
  const [validacionNombre, setValidacionNombre] = useState(false);
  const [validacionDireccion, setValidacionDireccion] = useState(false);
  const [validacioncorreo_Personal, setValidacioncorreo_Personal] =
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
    if (!correo_Personal) {
      setValidacioncorreo_Personal(true);
    } else if (correo_Personal.length < 15) {
      setValidacioncorreo_Personal(true);
    } else {
      setValidacioncorreo_Personal(false);
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
  }, [nombreCompleto, direccion, correo_Personal, telefono, fechaNac]);

  const editarpersonal = async (data) => {
    try {
      textoMensaje = "";
      console.log(nombreCompleto);
      Axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      await Axios.put("/personal/editar?id=" + id, {
        nombreCompleto: nombreCompleto,
        direccion: direccion,
        correo_Personal: correo_Personal,
        telefono: telefono,
        fechaNac: fechaNac,
        RolId: RolId,
        SucursalId: SucursalId,
      })
        .then(async (data) => {
          textoMensaje = "";
          console.log(data);
          const json = data.data;
          if (json.errores.length == 0) {
            nombreCompleto = json.data.nombreCompleto;
            direccion = json.data.direccion;
            correo_Personal = json.data.correo_Personal;
            telefono = json.data.telefono;
            fechaNac = json.data.fechaNac;
            RolId = json.data.RolId;
            SucursalId = json.data.SucursalId;
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

  const regresar = () => {
    editarpersonal();
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
                value={correo_Personal}
                onChangeText={setcorreo_Personal}
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
            <Text style={Estilos.labelCruds}>Id del Rol</Text>
            <View>
              <TextInput
                value={RolId}
                onChangeText={setRolId}
                placeholder="Ingrese el id rol"
                style={Estilos.entradasCrud}
              />
            </View>
            <Text style={Estilos.labelCruds}>Id del sucursal</Text>
            <View>
              <TextInput
                value={SucursalId}
                onChangeText={setSucursalId}
                placeholder="Ingrese el id sucursal"
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
