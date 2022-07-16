import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Button } from "react-native";

const DetailScreen = ({ navigation, route }) => {
  const [isLoading, setLoading] = useState(false);
  const [bids, setBids] = useState([]);
  const [asks, setAsks] = useState([]);
  const { item } = route.params;

  useEffect(() => {
    passingListAPI();
  }, []);

  const passingListAPI = () => {
    fetch(`https://api4.bitlo.com/market/orderbook?market=${item.marketCode}&depth=50 `, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(res => {
        const { sequenceId, bids: prevBids, asks: prevAsks } = res;
        const bids = prevBids.map((bid) => Object.values(bid)); 
        const asks = prevAsks.map((ask) => Object.values(ask)); 

        const values = { ...res, bids, asks };
        setAsks(values);
        setBids(values);
      
        setLoading(true)
      })
      .catch((error) => console.error(error));
  };

  const ItemViewAsks = ({ item }) => {
   
    return (
      <View style={{flexDirection: 'row', flex:1}}>
      <View style={{flex: 0.5}}>
        <Text>{(item[0])}</Text>
      </View>

      <View style={{flex:0.5}}>
        <Text> {(item[1])} </Text>
      </View>

      <View style={{flex:0.5}}>
        <Text> {(item[0]*item[1]).toFixed(2)} </Text>
      </View>
      </View>
    )
  }
  const ItemViewBids = ({ item }) => {

    return (
      <View style={{flexDirection: 'row', flex:1}}>
      <View style={{flex: 0.5}}>
        <Text>{item[0]}</Text>
      </View>

      <View style={{flex:0.5}}>
        <Text> {item[1]} </Text>
      </View>

      <View style={{flex:0.5}}>
        <Text> {(item[0]*item[1]).toFixed(2)} </Text>
      </View>
      </View>

      
    )
  }
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


  return (
    <View style={{flex:1}}>
      <View style={{flex:0.1, flexDirection: 'row', paddingTop:5}}>
          <View style={{flex:0.5}}>
            <Text> Miktar </Text>
          </View>
          <View style={{flex:0.5}}>
          <Text> Toplam </Text>
          </View>
          <View style={{flex:0.5}}>
          <Text> Fiyat </Text>
          </View>
      </View>
      <View style={{flex:0.5}}>
        {!isLoading ? (
          <Text> Loading... </Text>
        ) : (
          <FlatList
            style={{ height: 300 }}
            data={asks.asks }
            renderItem={ItemViewAsks}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
          />
        )}

      </View>
      <View style={{flex:0.1, flexDirection: 'row',paddingTop:5}}>
          <View style={{flex:0.5,}}>
            <Text> Miktar </Text>
          </View>
          <View style={{flex:0.5}}>
          <Text> Toplam </Text>
          </View>
          <View style={{flex:0.5}}>
          <Text> Fiyat </Text>
          </View>
      </View>
      <View style={{flex:0.5}}>
        {!isLoading ? (
          <Text> Loading... </Text>
        ) : (
          <FlatList
            style={{ height: 300 }}
            data={bids.bids }
            renderItem={ItemViewBids}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
          />
          
        )}

      </View>
    </View>
  )
}

export default DetailScreen;