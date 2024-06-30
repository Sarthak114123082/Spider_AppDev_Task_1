import { SafeAreaView, StyleSheet, Text, TouchableOpacity,Image, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

export default function header({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <MaterialIcons name='account-circle' size={35} color={'#4CAF50'}/>
            </TouchableOpacity>
            <View style={styles.text}>
                <TouchableOpacity>
                <Text style={styles.heading}>Spider Task1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.subtext}>APPLICATION DEVELOPMENT</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
            <MaterialIcons name='search' size={28} color={'#4CAF50'}/>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:15,
        height: 100,
    },
    header:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    text:{

    },
    subtext:{
        fontSize: 8.5,
        color:'#FFF'
    },
    heading:{
        fontSize:20,
        fontWeight: '700',
        color: '#FFF',
    },
})