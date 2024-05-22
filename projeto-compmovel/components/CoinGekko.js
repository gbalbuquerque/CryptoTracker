import React, { useEffect, useState } from "react";
import {View,Text,StyleSheet,StatusBar,FlatList,TextInput,TouchableOpacity,} from "react-native";

import Moeda from "./Moeda.js";

const CoinGekko = () => {
  const [coins, setCoins] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await res.json();
    setCoins(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={estilos.container}>
      <StatusBar backgroundColor="#141414" />

      <View style={estilos.header}>
        <Text style={estilos.titulo}>{'CryptoTracker'}</Text>
        <TextInput
          style={estilos.input}
          placeholder="Procure uma moeda"
          placeholderTextColor="#858585"
          onChangeText={(text) => text && setSearch(text)}
        />
      </View>

      <FlatList
        style={estilos.lista}
        data={coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
            coin.symbol.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moeda coin={item} />}
        refreshing={refreshing}
        onRefresh={async () => {
          setRefreshing(true);
          await loadData();
          setRefreshing(false);
        }}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    flex: 1,
    alignItems: "center",
    
  },
  header: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingTop: 10, 
  },
  titulo: {
    fontSize: 21,
    color: "white",
    marginTop: 11,
    paddingTop: 10, 
  },
  lista: {
    width: "80%",
  },
  input: {
    color: "white",
    borderBottomColor: "#4657CE",
    borderBottomWidth: 1,
    width: "50%",
    textAlign: "center",
    paddingTop: 10, 
    
  },
});

export default CoinGekko;