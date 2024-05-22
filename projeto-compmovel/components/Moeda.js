import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Moeda = ({ coin }) => (
  <View style={estilos.containerItem}>
    <View style={estilos.coinName}>
      <Image source={{ uri: coin.image }} style={estilos.image} />
      <View style={estilos.containerNames}>
        <Text style={estilos.text}>{coin.name}</Text>
        <Text style={estilos.textSymbol}>{coin.symbol}</Text>
      </View>
    </View>
    <View>
      <Text style={estilos.textPrice}>${coin.current_price}</Text>
      <Text
        style={[
          estilos.pricePercentage,
          coin.price_change_percentage_24h > 0
            ? estilos.priceUp
            : estilos.priceDown,
        ]}
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </Text>
    </View>
  </View>
);

const estilos = StyleSheet.create({
  containerItem: {
    backgroundColor: "#121212",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerNames: {
    marginLeft: 10,
  },
  coinName: {
    flexDirection: "row",
  },
  text: {
    color: "white",
  },
  textPrice: {
    color: "white",
    fontWeight: "bold",
  },
  pricePercentage: {
    textAlign: "right",
  },
  priceUp: {
    color: "green",
  },
  priceDown: {
    color: "red",
  },
  image: {
    width: 30,
    height: 30,
  },
  textSymbol: {
    color: "#434343",
    textTransform: "uppercase",
  },
});

export default Moeda;