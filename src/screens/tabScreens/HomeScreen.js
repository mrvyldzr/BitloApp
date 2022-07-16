import React,  { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableHighlight,TouchableOpacity, StyleSheet,Image} from "react-native";
import DetailScreen from "./DetailScreen";
import { createStackNavigator } from "@react-navigation/stack";
import COLORS from "../../constants/colors";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const HomeScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  useEffect(() => {
    passingListAPI();
  }, []);

  const passingListAPI = () => {
    fetch(`https://api4.bitlo.com/market/ticker/all`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setFilteredDataSource(res)
        setLoading(true)
      })
      .catch((error) => console.error(error));
  };
  
  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.75,
          width: "100%",
          backgroundColor: "gray",
        }}
      />
    );
  };

    const ItemView = ({ item }) =>  {
        return(
          <TouchableHighlight onPress={() => navigation.navigate('DetailScreen', {item})}>
            <View>
              <Text >{item.marketCode} 
              {"\n"}{item.currentQuote}</Text> 
            </View>
          
          </TouchableHighlight>
        )
      } 

    return (
  
      <View style={{flex:1}}>
         
        {!isLoading ? (
          <Text> Loading... </Text>
        ): (
          <FlatList
          style={{ height: 300 }}
          data={filteredDataSource}
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
        />
        )}
       
      </View>
    );
}

const HomeStack = createStackNavigator();

export default function HomeStackScreen({ navigation }) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
          color: "#E2E7EA",
        },
      }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: (
            props // App ar
          ) => (
            <Image
              style={{
                width: Platform.OS === "ios" ? 120 : 100,
                height: Platform.OS === "ios" ? 100 : 50,
              }}
              source={require("../../assets/bitloLogo.png")}
              resizeMode="contain"
            />
          ),
          headerRight: () => (
  
            <Icon
            name="exit-to-app"
            color='black'
            size={25}
            onPress={() => navigation.openDrawer()}
          />
          ),
        }}
      />
      <HomeStack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          headerTitle: (
            props // App Logo
          ) => (
            <Image
              style={{
                width: Platform.OS === "ios" ? 120 : 100,
                height: Platform.OS === "ios" ? 100 : 50,
              }}
              onPress={() => navigation.openDrawer()}
              source={require("../../assets/bitloLogo.png")}
              resizeMode="center"
            />
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("HomeScreen")}
              title="Info"
              color={COLORS.tabBarYellow}
            >
           
            </TouchableOpacity>
          )
         
        }}
      />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  root: {
    backgroundColor: "#ffffff",
    paddingRight: 15,
    paddingLeft: 15,
  },
  separator: {
    height: 2,
    backgroundColor: "pink",
  },
  row: {
    flexDirection: "row",
    marginLeft: -50,
    marginRight: -20,
    height: Platform.OS === "ios" ? 110 : 90,
  }
});
