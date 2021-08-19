import React from 'react';
import {Text, View, StyleSheet, ScrollView, Picker} from 'react-native';
import {Header, TextInput, Gap, Button, Select} from '../../components';

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Sign Up Address"
        subTitle="Make sure it’s valid"
        onBack={() => {}}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <TextInput label="Phone No." placeholder="Type your phone number" />
          <Gap height={16} />
          <TextInput label="Address" placeholder="Type your address" />
          <Gap height={16} />
          <TextInput label="House No." placeholder="Type your house number" />
          <Gap height={16} />
          <Select label="City" />
          <Gap height={24} />
          <Button
            text="Sign Up Now"
            onPress={() => navigation.replace('SuccessSignUp')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpAddress;

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
