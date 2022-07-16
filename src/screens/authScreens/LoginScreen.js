import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { Surface, Text } from "react-native-paper";
import { useDispatch } from "react-redux";
import { Login, sendIPAddress, signup } from "../../store/actions/auth";
import COLORS from "../../constants/colors";
import  I18n  from "../../constants/translation/I18n";

const { width } = Dimensions.get("screen");

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Login(username, password));
  };
   
  return (
    <ImageBackground
      source={require("../../assets/background3.png")}
      style={styles.container}
    >
      <View style={styles.container}>
      <View style={{alignItems: 'center'}}><Text style={{fontSize:15, fontWeight: 'bold'}}>Sign In Screen</Text></View>
        <Surface style={styles.box}>
          <View >
            <View >
              <TextInput
                label="Username"
                mode="outlined"
                placeholder="Username"
                keyboardType="default"
                color={COLORS.white}
                placeholderTextColor={COLORS.gray}
                style={{
                  borderColor: "#3b444b",
                  borderWidth: 2,
                  margin:5,
                  height: 50,
                  borderRadius: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 10,
                }}
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
            </View>
            <View >
              <TextInput
                secureTextEntry
                label="Password"
                mode="outlined"
                keyboardType="default"
                placeholder="Password"
                color={COLORS.white}
                placeholderTextColor={COLORS.gray}
                style={{
                  borderColor: "#3b444b",
                  borderWidth: 2,
                  margin:5,
              
                  height: 50,
                  borderRadius: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 10,
                  padding: 10,
                }}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
          </View>

          <View style={{ flexDirection: "column" ,}}>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                mode="contained"
              
                style={{
                  marginTop: 35,
                  backgroundColor: "#383e42",
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "#3b444b",
                  width: 150,
                  height: 30,
                  borderRadius: 5,
                }}
                onPress={submit}
              >
                <Text style={{color: 'white'}}>{I18n.t("signIn")}</Text>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                mode="contained"
                color={COLORS.tabBarYellow}
                style={{
                  marginTop: 10,
                  backgroundColor: COLORS.white,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "#3b444b",
                  width: 150,
                  height: 30,
                  borderRadius: 5,
                }}
                onPress={()=>{navigation.navigate("SignUpScreen")}}
              >
                <Text>{I18n.t("signUp")}</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          
        </Surface>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    paddingTop:10
  },
  box: {
    justifyContent: "center",
    shadowOpacity: 10,
    backgroundColor: '#1e2024',
    borderRadius: 10,
    elevation: 15,
    paddingRight:20,
    paddingLeft:20,
    height: 375,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    color: COLORS.white,
    marginBottom: 20,
    fontWeight: "bold",
  },
  header: {
    justifyContent: "flex-start",
    paddingBottom: 20,
    alignItems: "center",
  },
  logo: {
    alignItems: "center",
  
    height: 100,
    width: width,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 25,
    backgroundColor: "#1e2024",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 50,
    marginTop: 50,
    padding: 15,
    elevation: 3,
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonOpen: {
    backgroundColor: "#383e42",
  },
  buttonClose: {
    backgroundColor: "#383e42",
  },
  textStyle: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: 'white',
    fontSize:13
  },
});
