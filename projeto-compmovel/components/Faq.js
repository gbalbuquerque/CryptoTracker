import React from 'react';
import { View, ScrollView, Text, StyleSheet,TouchableOpacity, } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';

const FAQ = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Perguntas Frequentes</Text>
      <View style={styles.pgtContainer}>
        <Text style={styles.pergunta}>1. O aplicativo possui suporte para várias criptomoedas?</Text>
        <Text style={styles.resposta}>Sim, o aplicativo oferece suporte para diversas criptomoedas. Você pode verificar a lista completa na tela de precificação.</Text>
      </View>
      <View style={styles.pgtContainer}>
        <Text style={styles.pergunta}>2. Como faço para entrar em contato com o suporte?</Text>
        <Text style={styles.resposta}>Você pode entrar em contato com o suporte através do formulário disponível na tela de suporte ou enviando um e-mail para gui67785@gmail.com.</Text>
      </View>
      <View style={styles.pgtContainer}>
        <Text style={styles.pergunta}>3. Posso alterar a moeda de exibição no aplicativo?</Text>
        <Text style={styles.resposta}>Sim, você pode alterar a moeda de exibição nas configurações do aplicativo. Basta acessar a tela de configurações e selecionar a moeda desejada.</Text>
      </View>
      <View style={styles.pgtContainer}>
        <Text style={styles.pergunta}>4. O aplicativo armazena minhas informações de forma segura?</Text>
        <Text style={styles.resposta}>Sim, todas as suas informações são armazenadas de forma segura. Utilizamos os mais recentes protocolos de segurança para proteger seus dados.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#121212'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pgtContainer: {
    marginBottom: 20,
  },
  pergunta: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resposta: {
    fontSize: 16,
  },
});

export default FAQ;