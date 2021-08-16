import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Header, TextInput, Gap} from '../../components';

const SignIn = () => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best ever meal" />
      <View style={styles.container}>
        <TextInput label="Email" placeholder="Type your email address here" />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password here" />
        <Gap height={24} />
        <Button text="Sign In" />
        <Gap height={12} />
        <Button text="Create New Account" color="#8D92A3" textColor="white" />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
