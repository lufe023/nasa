import React from 'react';
import { Text, View, Image, StyleSheet, Platform } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Explore</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image style={styles.image} source={require('../../assets/nasa-logo.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    flexDirection: 'row',
    alignItems: 'center',
    // paddingTop: Platform.OS === 'android' ? 10 : 0, // Estilo condicional según la plataforma
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default Header;
