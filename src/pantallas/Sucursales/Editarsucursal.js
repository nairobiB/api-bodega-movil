import Estilos from "../../componentes/Estilos";
import { Text, ScrollView, View, TextInput, Alert } from "react-native";
import Axios from "../../componentes/Axios";
import { Icon, Divider, Heading, Button, Switch } from "native-base";
import UsuarioContext from "../../contexto/UsuarioContext";
import { useNavigation } from "@react-navigation/native";

import React, { useState, useEffect, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
export default function App({ route, navigation }) {
    const nav = useNavigation();
    const { token } = useContext(UsuarioContext);
    const { id, antiguaSucursal, antiguoDireccion } = route.params;
    const [nombreSucursal, setnombreSucursal] = useState(antiguaSucursal);
    const [Direccion, setDireccion] = useState(antiguoDireccion);
    const [validarSucursal, servalidarSucursal] = useState(false);
    const [validarDireccion, setValidarDireccion] = useState(false);
    const [espera, setEspera] = useState(false);
    const titulo = "Editar";
    useEffect(() => {
        if (!nombreSucursal) {
            servalidarSucursal(true);
        } else if (nombreSucursal.length < 3 && nombreSucursal.length > 50) {
            servalidarSucursal(true);
        } else {
            servalidarSucursal(false);
        }
        if (!Direccion) {
            setValidarDireccion(true);
        } else if (Direccion.length < 3 && Direccion.length > 50) {
            setValidarDireccion(true);
        } else {
            setValidarDireccion(false);
        }
    }, [nombreSucursal, Direccion]);

    const editarSucursal = async (data) => {
        var textoMensaje = "";
        try {
            console.log(nombreSucursal);
            Axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            await Axios.put("/sucursales/editar?id=" + id, {
                nombreSucursal: nombreSucursal,
                Direccion: Direccion,
            })

                .then(async (data) => {
                    console.log(data);
                    const json = data.data;
                    if (json.errores.length == 0) {
                        nombreSucursal = json.data.nombreSucursal;
                        Direccion = json.data.Direccion;
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
    };

    const regresar = () => {
        editarSucursal();
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
                        <Text style={Estilos.labelCruds}>Nombre de sucursal</Text>
                        <TextInput
                            value={nombreSucursal}
                            onChangeText={setnombreSucursal}
                            placeholder="Ingrese el nombre de la sucursal"
                            style={Estilos.entradasCrud}
                        ></TextInput>
                        <Text style={Estilos.labelCruds}>Direccion de la sucursal</Text>
                        <TextInput
                            value={Direccion}
                            onChangeText={setDireccion}
                            placeholder="Ingrese la Direccion de sucursal"
                            style={Estilos.entradasCrud}
                        ></TextInput>
                    </View>

                    <View style={Estilos.contenedorBotones}>
                        <Button
                            color={"#313087"}
                            style={Estilos.botonescrud}
                            onPress={regresar}
                            colorScheme="darkBlue"
                        >
                            Editar
                        </Button>
                        <Button
                            color={"#313087"}
                            style={Estilos.botonescrud}
                            onPress={() => nav.goBack()}
                            colorScheme="muted"
                        >
                            Cancelar
                        </Button>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
