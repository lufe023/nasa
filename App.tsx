/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Home from './src/views/Home'
import Routes from './src/routes';
function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <Routes/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
backgroundColor: 'rgba(7,26,93,255)'
}
});

export default App;
