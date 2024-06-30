import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function footer() {
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity>
            <FontAwesome name='home' size={25} color='#4CAF50'/>
        </TouchableOpacity>
        <TouchableOpacity>
            <MaterialIcons name='favorite-border' size={25} color='#4CAF50'/>
        </TouchableOpacity>
        <TouchableOpacity>
            <MaterialIcons name='add' size={25} color='#4CAF50'/>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        marginVertical: 10
    }
})