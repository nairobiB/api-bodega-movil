import { View, Image, StyleSheet, Text, Checkbox } from "react-native";
import {
  Icon,
  Group,
  Button,
  Divider,
  Modal,
  FormControl,
  Input,
} from "native-base";
import Axios from "./Axios";
import UsuarioContext from "../contexto/UsuarioContext";
import React, { useState, useEffect, useContext } from "react";
import login from "../../assets/login.jpg";
import { useNavigation } from "@react-navigation/native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import Estilos from "./Estilos";

const Person = (props) => {
  const { token } = useContext(UsuarioContext);

  const nav = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const presss = () => {
    const idPersonal = props.personal.id;
    const personalnombre = props.personal.nombreCompleto;
    const dir = props.personal.direccion;
    const cor = props.personal.correo_Personal;
    const tel = props.personal.telefono;
    const fecha = props.personal.fechaNac;
    const rol = props.personal.RolId;
    const suc = props.personal.SucursalId;
    nav.navigate("editarpersonal", {
      id: idPersonal,
      oldname: personalnombre,
      olddir: dir,
      oldcor: cor,
      oldtel: tel,
      oldfecha: fecha,
      oldrol: rol,
      oldsuc: suc,
    });
    console.log(idPersonal);
  };
  const eliminar = async (data) => {
    var textoMensaje = "";
    try {
      Axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      await Axios.delete("/personal/eliminar?id=" + props.personal.id)

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

  return (
    <View style={Estilos.contenedorTipo}>
      <View style={Estilos.contenedorTexto}>
        <Text>ID: {props.personal.id}</Text>
        <Text>Nombre: {props.personal.nombreCompleto}</Text>
        <Text>Direccion: {props.personal.direccion}</Text>
        <Text>Correo: {props.personal.correo_Personal}</Text>
        <Text>Telefono: {props.personal.telefono}</Text>
        <Text>Rol: {props.personal.RolId}</Text>
        <Text>Sucursal: {props.personal.SucursalId}</Text>
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
            onPress={presss}
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
              <FormControl.Label>Nombre del personal</FormControl.Label>
              <Input value={props.personal.nombreCompleto} editable={false} />
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

export default Person;
