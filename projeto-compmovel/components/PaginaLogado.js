import * as React from 'react';
import { Text, View, Button, StyleSheet,TouchableOpacity,Image,} from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';

class PaginaLogado extends React.Component {
  render(){
    return(
      <View style={estilos.container}> 
        
        <Image style= {estilos.imagem} source = {require('../assets/bitcoin.png')}></Image>
        <Text style={estilos.texto}> {"Acesse a plataforma"} </Text>
        <TouchableOpacity 
          style={estilos.botao} 
          onPress={() => this.props.navigation.navigate('CoinGekko')}>
          <Text>{'CryptoTracker'}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={estilos.botao} 
          onPress={() => this.props.navigation.navigate('FAQ')}>
          <Text>FAQ</Text>
        </TouchableOpacity>
      </View>
    )
    
  }
}

const estilos = StyleSheet.create({

  container: {
    backgroundColor: '#141414',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 0, 
  },
  botao: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'space-between',
    borderColor: "white",
    borderWidth: 2,
    margin: 10,
    borderRadius: 50,
  },
  texto: {
    color: "white",
    fontSize: 20,
    alignSelf: "center",
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
  },

  imagem: {
    alignSelf: 'center',
    
  }
})

export default PaginaLogado;