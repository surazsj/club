import React , {useState} from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../asset/images/logo.png';
import CustomInput from '../../CustomInput/CustomInput';
import CustomButton from '../../CustomButton/CustomButton';
const Signupscreen = () => {

    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const {height} = useWindowDimensions();
    return (
        <ScrollView style={styles.scroll}>
        <View style={styles.root}>
        
        <Image source={Logo} 
        style={[styles.logo, {height: height* 0.2}]}
        resizeMode= "contain"/>
        <CustomInput placeholder="Enter your Username" value={username} setValue= {setUsername} />
        <CustomInput placeholder="Password" value={password} setValue= {setPassword} secureTextEntry/>
        <CustomButton place = "Sign In" />
        <CustomButton place = "Create New Account"/>
        <CustomButton place = "Sign in with Facebook"/>
        <CustomButton place = "Sign in with Google"/>
        
        </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    scroll: {
        width: '100%',
        height: '100%'
    },
    root: {
        alignItems: 'center',
        padding: 20,

    },
    logo: {
    
        width: '60%',
        maxWidth: 200,
        maxHeight: 200,
        marginBottom: 50,
    },
});

export default Signupscreen;