import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Rating from '../Rating';

const ItemListFood = ({
  image,
  onPress,
  rating,
  items,
  price,
  type,
  name,
  date,
  status,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        // item list product seperti di home page
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.textFood}>{name}</Text>
              <Text style={styles.priceFood}>IDR {price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        );
      case 'order-summary':
        // item order summary
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.textFood}>{name}</Text>
              <Text style={styles.priceFood}>IDR {price}</Text>
            </View>
            <Text style={styles.items}>{items} items</Text>
          </>
        );
      case 'in-progress':
        // item in progress
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.textFood}>{name}</Text>
              <Text style={styles.priceFood}>
                {items} items. IDR {price}
              </Text>
            </View>
          </>
        );
      case 'past-orders':
        // item past orders
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.textFood}>{name}</Text>
              <Text style={styles.priceFood}>
                {items} items. IDR {price}
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        );
      default:
        // item product
        return (
          <>
            <View style={{flex: 1}}>
              <Text style={styles.textFood}>{name}</Text>
              <Text style={styles.priceFood}>IDR {price}</Text>
            </View>
            <Rating />
          </>
        );
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <View>
          <Image source={image} style={styles.imageFood} />
        </View>
        {renderContent()}
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
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
  items: {fontSize: 13, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  date: {fontSize: 10, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  status: {fontSize: 10, fontFamily: 'Poppins-Regular', color: '#D9435E'},
});
