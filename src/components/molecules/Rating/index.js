import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IcStartOff, IcStartOn} from '../../../assets';

const Rating = () => {
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.startContainter}>
        <Image source={IcStartOn} style={styles.startIc} />
        <Image source={IcStartOn} style={styles.startIc} />
        <Image source={IcStartOn} style={styles.startIc} />
        <Image source={IcStartOn} style={styles.startIc} />
        <Image source={IcStartOff} style={styles.startIc} />
      </View>
      <Text style={styles.numberStart}>4.5</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  ratingContainer: {flexDirection: 'row'},
  startContainter: {flexDirection: 'row'},
  startIc: {width: 16, height: 16},
  numberStart: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginLeft: 4,
  },
});
