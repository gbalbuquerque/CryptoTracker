import React, { useEffect, useState } from "react";
import {View,Text,StyleSheet,StatusBar,FlatList,TextInput,} from "react-native";

import Moeda from "./Moeda.js";

const PaginaLogado = () => {
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
    <View style={styles.container}>
      <StatusBar backgroundColor="#141414" />

      <View style={styles.header}>
        <Text style={styles.titulo}>{'CryptoTracker'}</Text>
        <TextInput
          style={styles.input}
          placeholder="Procure uma moeda"
          placeholderTextColor="#858585"
          onChangeText={(text) => text && setSearch(text)}
        />
      </View>

      <FlatList
        style={styles.lista}
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

const styles = StyleSheet.create({
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
  },
  titulo: {
    fontSize: 21,
    color: "white",
    marginTop: 11,
  },
  lista: {
    width: "80%",
  },
  input: {
    color: "white",
    borderBottomColor: "#4657CE",
    borderBottomWidth: 1,
    width: "30%",
    textAlign: "center",
  },
});

export default PaginaLogado;