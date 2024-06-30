import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match");
      return;
    }

    try {
      const user = { email, phoneNumber, password };
      
      // Store user data (simulated)
      await AsyncStorage.setItem(email, JSON.stringify(user));

      Alert.alert("Signup Successful!");
      // Reset form fields
      setEmail('');
      setPhoneNumber('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      Alert.alert("Signup Failed", error.message);
    }
  };

  return (
    <ImageBackground style={styles.Background} source={require('./images/background.png')} >
    <View style={styles.container}>
        <View style={styles.mainbox}>
        <View style={styles.Box}>
            <Text style={styles.label}>Email:</Text>
            <TextInput 
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
            />
        </View>
        <View style={styles.Box}>
            <Text style={styles.label}>Phone Number:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPhoneNumber}
                value={phoneNumber}
                keyboardType="phone-pad"
            />
        </View>
        <View style={styles.Box}>
            <Text style={styles.label}>Password:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />
        </View>
        <View style={styles.Box}>
            <Text style={styles.label}>Confirm Password:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                secureTextEntry
            />
        </View>
        <View style={styles.button}>
            <TouchableOpacity onPress={handleSignup} style={styles.bottonbox}>
                <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
        </View> 
        </View>

        <View style={styles.SignUp}>
        <Text style={styles.signtext}>Already have an account?</Text>
            <TouchableOpacity style={styles.bottonbox}>
                <Text style={styles.buttonText}>LogIn</Text>
            </TouchableOpacity>
        </View>
    </View>
    </ImageBackground>
        
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Background:{
    flex:1
  },
  mainbox:{
    borderBottomWidth:1,
    borderBottomColor: '#000'
  },
  Box:{
    marginVertical:10,
    borderRadius:10
  },
  label: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    marginVertical:5
  },
  input: {
    color: '#FFF',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,

    borderRadius:10,
    backgroundColor:'rgba(0, 0, 0, 0.4)',
  },
  button:{
    marginVertical:20,
    justifyContent: 'center'
  },
  bottonbox:{
    alignItems:'center'
  },
  buttonText:{
    color:'#FFF',
    fontWeight: 'bold',
    borderRadius:20,
    paddingVertical:15,
    paddingHorizontal:30,
    backgroundColor:'rgba(0, 0, 0, 0.4)',
  },
  SignUp:{
    marginTop:20,
  },
  signtext:{    
    textAlign: 'center',
    marginBottom:10,
    color: '#FFF',
    fontSize: 17,
    fontWeight: '600',
},
});

export default SignupForm;
