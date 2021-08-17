import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 2000);
  });
  return (
    <View
      style={{
        backgroundColor: '#FFC700',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo />
      <View style={{height: 50}}>
        <Text
          style={{
            fontSize: 32,
            color: '#020202',
            paddingTop: 10,
            fontFamily: 'Poppins-Medium',
          }}>
          FoodMarket
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;

/*const styles = StyleSheet.create({
  },
}); */
