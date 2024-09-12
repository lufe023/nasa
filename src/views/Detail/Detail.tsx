import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../types';
import Header from '../../components/Header';

const Detail = () => {
const {params: {title, url, explanation, date}} = useRoute<NativeStackScreenProps<RootStackParams, 'Detail'>['route']>();

  return (
    <View style={Styles.container}>
      <Header/>
    <View style={Styles.content}>
    <Image source={{uri: url}} style={Styles.image}/>
    <Text style={Styles.title}>{title}</Text>
    <Text style={Styles.date}>{date}</Text>
    <ScrollView style={Styles.explanationContainer}>
      <Text style={Styles.explanation}>
      {explanation}
      </Text>
      </ScrollView>
    
    </View>
  </View>
  );
}

export default Detail

const Styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(7,26,93,255)',
  },
  content:{
    backgroundColor: '#2c449d',
    borderRadius: 16,
    marginVertical: 24,
    padding: 16,
    flex:1
  },

  title:{
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16
  },
  image:{
    width: '100%',
    height: '50%',
    borderColor: '#fff',
    borderRadius: 16,
    borderWidth: 2,
    marginBottom: 16
  },
  date:{
    color: '#fff',
    fontSize: 16
  },
  explanationContainer:{
    marginVertical: 16
  },
  explanation:{
    color: '#fff',
    fontSize: 16
  },
})