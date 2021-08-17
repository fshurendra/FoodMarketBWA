import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Header, TextInput, Gap, Button} from '../../components';

const SignUp = () => {
  return (
    <View style={styles.page}>
      <Header title="Sign Up" subTitle="Registrasi and eat" onBack={() => {}} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.photo}>
            <View style={styles.borderPhoto}>
              <View style={styles.photoContainer}>
                <Text style={styles.addPhoto}>Add Photo</Text>
              </View>
            </View>
          </View>
          <TextInput label="Full Name" placeholder="Type your full name" />
          <Gap height={16} />
          <TextInput label="Email" placeholder="Type your email here" />
          <Gap height={16} />
          <TextInput label="Password" placeholder="Type your password here" />
          <Gap height={24} />
          <Button text="Continue" />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
  photo: {alignItems: 'center', marginTop: 26, marginBottom: 16},
  borderPhoto: {
    borderWidth: 1,
    color: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
