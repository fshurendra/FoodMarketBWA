import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.textTitle}>Food Market</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  textTitle: {textAlign: 'center'},
});
