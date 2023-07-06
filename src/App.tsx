/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { FC } from 'react';
import {StyleSheet,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppNavigator } from './Components/Navigators';
import { Footer, Header } from './Components/Fragments';

const App: FC = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <View style={styles.header}>
          <Header />
        </View>

        <View style={styles.content}>
          <AppNavigator />
        </View>

        <View style={styles.footer}>
          <Footer />
        </View>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#006363',
    paddingVertical: 5,
    paddingHorizontal:15,

    alignItems: "center",
    flexDirection: "row",
  },

  content: {
    backgroundColor: '#5CCCCC',
    flex:1,
    paddingVertical:20,
    paddingHorizontal:10
  },

  footer: {
    backgroundColor: '#006363',
    fontWeight: 600,
    fontSize: '1.09em',
    paddingLeft: 7,

    alignItems: "center",
  }
})

export default App;