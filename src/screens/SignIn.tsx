import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Pressable } from 'react-native';
import auth from '@react-native-firebase/auth';
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { Text } from 'react-native-elements';
const ActionCodeSettings = {
  url: "",
  android: "",
  handleCodeInApp: true,
}

function SignIn({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRegex: RegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const isValidEmail: boolean = emailRegex.test(email);
  const handleLogin = () => {
    if (isValidEmail && password) {
      navigation.navigate('Home')
    }
  };

  return (
    <View>
      <Text style={styles.appTxt}>My Application</Text>
      <TextInput style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Pressable style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#7593C5' : '#7593eb',
        },
        styles.loginBtn,
      ]} onPress={handleLogin}>
        <Text style={styles.loginTxt}>Log In</Text> 
        </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  loginBtn: {
    width: 200,
    alignSelf: "center",
    borderRadius: 20,
    marginVertical: 40
  },
  loginTxt: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    lineHeight: 50,
    fontWeight: "900"
  },
  appTxt: {
    marginVertical: 100,
    textAlign: "center",
    fontWeight: "900",
    fontSize: 36,
    color: "#7593eb"
  },
  input: {
    marginLeft: 20
  }
})
export default SignIn;
