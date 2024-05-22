import * as React from 'react';
import { Text,View,Button, TextInput, Alert, StyleSheet,TouchableOpacity,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import PaginaLogado from './components/PaginaLogado'
import firebase from './config/config'

const Navegacao1 = createBottomTabNavigator();


export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Navegacao2.Navigator >
          <Navegacao2.Screen name="Login" component={NavTab} 
            options={{
              headerShown: false,
              
            }}
            />
          <Navegacao2.Screen name="PaginaLogado" component={PaginaLogado} 
          options={{
              headerShown: false 
            }}
          />
       </Navegacao2.Navigator>
      </NavigationContainer>
    );
  }
}

const Navegacao2 = createStackNavigator();

class NavTab extends React.Component {
  render() {
    return (
        <Navegacao1.Navigator screenOptions={{ headerShown: false }} >
          <Navegacao1.Screen
            name="Login"
            component={Principal} //o componente é a próxima estrutura de navegação
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ), 
              //tabBarStyle: { display: 'none' }
            }}
          />
          <Navegacao1.Screen
            name="Cadastro"
            component={Cadastro}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="account-details"
                  color={color}
                  size={size}
                />
              )
            }}
          />
        </Navegacao1.Navigator>
    );
  }
}

class Cadastro extends React.Component{
  constructor(props){
    super(props);
    this.state={
      user: undefined,
      password: undefined,

    }

  }

  gravar(){
    const email = this.state.user.toLowerCase();
    const password = this.state.password.toLowerCase();

    firebase.auth()
   .createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert('Usuário cadastrado com sucesso!');
      })
      .catch(error => {
        const errorCode = error.code;
        if (errorCode == "auth/email-already-in-use") {
          console.log("Esse email já está em uso");
          Alert.alert('Erro', "Esse email já está em uso");
        } else if (errorCode == "auth/weak-password") {
          console.log("Senha fraca");
          Alert.alert('Erro', "Senha fraca, digite outra senha");
        } else if (errorCode == "auth/invalid-email") {
          console.log("Formato do email invalido");
          Alert.alert('Erro', "Formato do email invalido");
        } else {
          console.log("Erro Desconhecido");
          Alert.alert('Erro', "Ocorreu um erro" + +  error);
        }
      });
  }

  render(){
    return(
     
    <View style = {estilos.container}>
      <Text style ={estilos.titulo}>{'Crypto Tracker'}</Text>
      <Text style={estilos.texto}>{"Cadastrar Usuário:"}</Text>
      <TextInput style={estilos.input} onChangeText={(texto)=>this.setState({user: texto})}></TextInput>
      <Text style={estilos.texto}>{"Cadastrar Senha:"}</Text>
      <TextInput style={estilos.input} onChangeText={(texto)=>this.setState({password: texto})}></TextInput>
      <TouchableOpacity style = {estilos.botao} title="Logar" onPress={()=>this.ler()}>
        <Text> {'Cadastrar'}</Text>
      </TouchableOpacity>
      
    </View>
    
    )
  }
}

class Principal extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      usuario: undefined,
      senha: undefined
    }
  }

  render(){
    return(
    <View style = {estilos.container}>
      <Image>  </Image>
      <Text style={estilos.texto} >{"Usuário:"}</Text>
      <TextInput style={estilos.input}  onChangeText={(texto)=>this.setState({usuario: texto})}></TextInput>
      <Text style={estilos.texto} >{"Senha:"}</Text>
      <TextInput style={estilos.input}  onChangeText={(texto)=>this.setState({senha: texto})}></TextInput>
      <TouchableOpacity style = {estilos.botao} title="Logar" onPress={()=>this.ler()}>
        <Text> {'Logar'}</Text>
      </TouchableOpacity>
      <Text style = {estilos.ntuca}>{'Não tem uma conta ainda?'}</Text>
      <TouchableOpacity style = {estilos.botao2}>
        <Text style = {estilos.textobt}> {'Clique aqui'} </Text>
      </TouchableOpacity>
    </View>
    )
  }

  ler(){
    const email = this.state.usuario.toLowerCase();
    const password = this.state.senha.toLowerCase();

    firebase.auth()
    .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert("Logado!!!", "Login realizado com sucesso!");
        this.props.navigation.navigate("PaginaLogado", { email: this.state.usuario });
      })
      .catch(error => {
        const errorCode = error.code;
        if (errorCode == "auth/invalid-email") {
          console.log("Formato do email invalido");
          alert("Formato do email invalido");
        } else {
            console.log("Erro Desconhecido");
            alert("Ocorreu um erro");
        }
      });
  }
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    flex : 1,
    justifyContent: 'center'
  },
  texto: {
    color: "white",
    fontSize: 20,
    alignSelf: "center",
    fontWeight: 'bold',
    alignItems: 'left'
  },
  input: {
    height: 50,
    padding: 5,
    fontSize: 25,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 8,
    backgroundColor: 'white'
  },
  botao: {
    // color: '#000000',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'space-between',
    borderColor: "white",
    borderWidth: 2,
    margin: 10,
    borderRadius:50,
    
  },
  ntuca: {
    color: 'white',
    alignSelf: "center",
    
  },
  botao2: {
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 2,
    margin: 10,
    borderRadius:50,
  },
  textobt: {
    color: 'blue'
    
  },
  
});

