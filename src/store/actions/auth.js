import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from "@react-native-firebase/auth"

import {
  Alert
} from "react-native";
export const Init = () => {
  return async (dispatch) => {
    let token = null;
    token = await AsyncStorage.getItem("token");
    //console.log("Inıt token"+ token)
    if (token !== null) {
      dispatch({
        type: "LOGIN",
        payload: token,
      });
    }
  };
};


export const Login = (email, password) => {
  return async (dispatch) => {
    if (email !== null && password !== null  ) {
      try {
        let response = await auth().signInWithEmailAndPassword(email, password)
        if (response) {
     
          dispatch({
               type: "LOGIN",
               payload: response.user.uid
             });
          Alert.alert('Successful Login','Welcome the React Native')
        }else{
          Alert.alert('user not found')
        }
      } catch (e) {
        console.error(e.message)
      }
    } else {
      Alert.alert("Add email and password");
    }
  };
};

export const Logout = () => {
  return async (dispatch) => {
    try {
      AsyncStorage.removeItem("token")
      .then(() =>
        AsyncStorage.removeItem("IP")
      );
      dispatch({
        type: "LOGOUT",
      });
      return true;
    } catch (e) {
      return false;
    }
  };
};
