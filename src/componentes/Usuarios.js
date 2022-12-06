import { View, Image, StyleSheet, Text, Checkbox } from "react-native";
//import Checkbox from 'expo-checkbox';
import { Icon, Group, Button, Divider, Modal, FormControl, Input } from "native-base";
import React, { useState, useEffect, useContext } from "react";
import login from "../../assets/nulo.png";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Estilos from "./Estilos";
import Axios from "./Axios";
import UsuarioContext from "../contexto/UsuarioContext";
import { useNavigation } from "@react-navigation/native";

const uriImagen = Image.resolveAssetSource(login).uri;
import { urlImagenesUsuarios } from "../configuraciones/Urls";

const Usuarios = (props) => {

  const { token } = useContext(UsuarioContext);
  const nav = useNavigation();

  const [showModal, setShowModal] = useState(false);
  const presionar = () => {
    const idUsuario = props.usuario.id;
    const username = props.usuario.usuario;
    const contrasena = props.usuario.contrasena;
    const correo = props.usuario.correo;
    const permisos = props.usuario.permisos;
    const personalId = props.usuario.PersonalId;
    nav.navigate("editarUsuario", {id: idUsuario,usuario: username, contrasena: contrasena, correo: correo, permisos: permisos, PersonalId: personalId});
  };
  const eliminar = async (data) => {
    var textoMensaje = "";
    try {
      Axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      await Axios.delete("/users/eliminar?id=" + props.usuario.id)

        .then(async (data) => {
          console.log(data);
          const json = data.data;
          if (json.errores.length == 0) {
          } else {
            json.errores.forEach((element) => {
              textoMensaje += element.mensaje + ". ";
            });
          }
          console.log(data);
        })
        .catch((error) => {
          textoMensaje = error;
        });
    } catch (error) {
      textoMensaje = error;
      console.log(error);
    }
    setShowModal(false);
  };

  const [Check, setCheck] = useState(false);
  const [imagen, setImagen] = useState(uriImagen);
  useEffect(() => {
    setImagen(cargarImagen);
    // setCheck(props.usuario.activo);
  }, []);

  const cargarImagen = () => {
    console.log(props.usuario.imagen);
    if (props.usuario.imagen == null) {
      setImagen(uriImagen);
    } else {
      setImagen(urlImagenesUsuarios + props.usuario.imagen);
    }
    return imagen;
  };
  return (
    <View style={Estilos.contenedorTipo}>
      <Image style={Estilos.imagen} source={{ uri: imagen }} />
      <View style={Estilos.contenedorTexto}>
        <Text>ID: {props.usuario.id}</Text>
        <Text>{props.usuario.usuario}</Text>
        <Text>{props.usuario.correo}</Text>
        <Text>{props.usuario.permisos}</Text>
      </View>
      <Divider
        my="3"
        _light={{
          bg: "muted.800",
        }}
        _dark={{
          bg: "muted.50",
        }}
      />
      <View>
        <View style={Estilos.contenedorB}>
          <Button
            startIcon={<Icon as={Feather} name="edit" size={4}></Icon>}
            colorScheme="darkBlue"
            onPress={presionar}
          >
            Editar
          </Button>
          <Button
            startIcon={<Icon as={MaterialIcons} name="delete" size={4}></Icon>}
            variant="solid"
            colorScheme="red"
            onPress={() => setShowModal(true)}
          >
            Eliminar
          </Button>
        </View>
      </View>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Eliminar registro</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Nombre del usuario</FormControl.Label>
              <Input value={props.usuario.usuario} editable={false} />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancelar
              </Button>
              <Button variant="solid" colorScheme="red" onPress={eliminar}>
                Eliminar
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default Usuarios;
