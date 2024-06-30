import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function account() {

    const navigationback = useNavigation();

  return (
        <ImageBackground style={styles.background} source={require('./images/background.png')}>
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.back} onPress={() => navigationback.goBack()}>
            <MaterialIcons style={styles.backicon} name='arrow-back' size={20} color='#5FB78F'/>
        </TouchableOpacity>
        <View style={styles.content}>
            <MaterialIcons name='account-circle' size={60} color={'#4CAF50'}/>
            <View style={styles.text}>
                <Text style={styles.email}>abc*********@gmail.com</Text>
                <Text style={styles.number}>*******890</Text>
            </View>
        </View>


        <TouchableOpacity style={styles.friends}>
            <FontAwesome5 name='user-friends' size={20} color='white'/>
            <Text style={styles.Text}>Invite Friends</Text>
        </TouchableOpacity>

        <View style={styles.notification}>
            <TouchableOpacity style={styles.notificationBox}>
                <MaterialIcons name='notifications' size={20} color='white'/>
                <Text style={styles.Text}>Notification</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationBox}>
                <MaterialIcons name='warning' size={20} color='white'/>
                <Text style={styles.Text}>Announcments</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationBox}>
                <MaterialIcons name='help' size={20} color='white'/>
                <Text style={styles.Text}>Help</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.security}>
            <TouchableOpacity style={styles.notificationBox}>
                <MaterialIcons name='security' size={20} color='white'/>
                <Text style={styles.Text}>Security</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationBox}>
                <MaterialIcons name='settings' size={20} color='white'/>
                <Text style={styles.Text}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationBox}>
                <MaterialIcons name='dangerous' size={20} color='white'/>
                <Text style={styles.Text}>Blacklist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationBox}>
                <MaterialIcons name='edit-document' size={20} color='white'/>
                <Text style={styles.Text}>About Us</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.friends}>
            <MaterialIcons name='logout' size={20} color='white'/>
            <Text style={styles.Text}>Log Out</Text>
        </TouchableOpacity>
    </SafeAreaView>
        </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background:{
        flex:1
    },
    container:{
        marginHorizontal:20
    },
    back:{
        marginVertical:35,
        marginBottom:10,
        alignItems:'flex-start'
    },
    backicon:{
        backgroundColor: '#FFF',
        borderRadius:20,
        padding:5
    },
    content:{
        flexDirection: 'row',
        alignItems:'center',
    },
    text:{
        marginLeft: 10
    },
    email:{
        color:'#FFF',
        fontWeight: 'bold'
    },
    number:{
        fontWeight: 'bold',
        color: '#CBCACA'
    },
    friends:{
        marginTop:20,
        padding: 20,
        flexDirection: 'row',
        backgroundColor:'rgba(0, 0, 0, 0.4)',
        borderRadius: 20
    },
    Text:{
        color: '#FFF',
        fontWeight: '600',
        marginLeft: 15
    },
    notification:{
        marginVertical:5,
        padding: 10,
        backgroundColor:'rgba(0, 0, 0, 0.4)',
        borderRadius: 20
    },
    notificationBox:{
        flexDirection: 'row',
        paddingVertical:10,
        marginHorizontal:10
    },
    security:{
        padding: 10,
        backgroundColor:'rgba(0, 0, 0, 0.4)',
        borderRadius: 20
    }
})  