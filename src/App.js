import React from 'react';
import {StyleSheet} from 'react-native';
import {SplashScreen, SignIn} from './pages';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <SignIn />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  textTitle: {textAlign: 'center'},
});
