import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    if (password.length()<4) {
      Alert.alert("Passwords do not match");
      return;
    }

    try {
      const user = { email, phoneNumber, password };
      
      // Store user data (simulated)
      await AsyncStorage.setItem(email, JSON.stringify(user));

      Alert.alert("Welcome Back!");
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
    <View style={styles.container}>
        <View style={styles.Box}>
            <Text style={styles.label}>Email / Phone Number :</Text>
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
        <View style={styles.button}>
            <TouchableOpacity onPress={handleSignup} style={styles.bottonbox}>
                <Text style={styles.buttonText}>LogIn</Text>
            </TouchableOpacity>
        </View> 
    </View>
        
    
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:120,
    marginHorizontal:20,
    justifyContent:'center',
    borderRadius:20,
    paddingVertical:20,
    backgroundColor:'rgba(0, 0, 0, 0.4)',
  },
  Box:{
    marginVertical:10,
    borderRadius:10
  },
  label: {
    color: '#FFF',
    fontSize: 16,
    marginHorizontal:15,
    fontWeight: '600',
    marginVertical:5
  },
  input: {
    color: '#FFF',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:10,
    marginHorizontal: 15,
    backgroundColor:'rgba(0, 0, 0, 0.4)',
  },
  button:{
    marginVertical:20,
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
});

export default SignupForm;
