import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {FoodDummy1} from '../../../assets';
import Rating from '../Rating';

const ItemListFood = ({image}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={image} style={styles.imageFood} />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.textFood}>Soup Bumil</Text>
        <Text style={styles.priceFood}>IDR 289.000</Text>
      </View>
      <Rating />
    </View>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imageFood: {
    width: 60,
    height: 60,
    marginRight: 12,
    borderRadius: 8,
    overflow: 'hidden',
  },
  textFood: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  priceFood: {fontSize: 13, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
});
