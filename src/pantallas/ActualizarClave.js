import Estilos from "../componentes/Estilos";
import {
  Text,
  ScrollView,
  ImageBackground,
  View,
  TextInput,
  Button,
} from "react-native";

import { Alert } from "react-native";
import login from "../../assets/login.jpg";
import { Icon, Input } from "native-base";
import { Ionicons, Entypo } from "@expo/vector-icons";

const ActualizarClave = () => {
    return (
      //Header
      <ScrollView style={Estilos.container} showsVerticalScrollIndicator={false}>
        <ImageBackground source={login} style={Estilos.imagenLogin}>
          <View style={Estilos.firstView}>
            <Icon as={Ionicons} name="lock-open-sharp" size={65} color={"white"} />
            <Text style={Estilos.textoTitulo}>Recuperar contraseña</Text>
          </View>
        </ImageBackground>
        <View style={Estilos.bottomView}>
          <View style={{ padding: 40 }}>
            <Text style={Estilos.textoInicio}>Formulario de recuperacion</Text>
            <View style={{ marginTop: 25 }}>
              <Text style={Estilos.labelLogin}>Pin</Text>
              <TextInput
                placeholder="Ingrese el Pin recibido"
                style={{ marginTop: 5 }}
                
              ></TextInput>

              <Text style={Estilos.labelLogin}>Nueva Contraseña</Text>
              <TextInput
                placeholder="Ingrese la nueva contraseña"
                style={{ marginTop: 5 }}
                
              ></TextInput>

              <Text style={Estilos.labelLogin}>Confirmar contraseña</Text>
              <TextInput
                placeholder="Confirme su nueva contraseña"
                style={{ marginTop: 5 }}
                
              ></TextInput>
            </View>
            {/* Boton login */}
            <View style={{ marginTop: 30 }}>
              <Button
                style={Estilos.btnLogin}
                title="Enviar"
                
              ></Button>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };

  export default ActualizarClave;