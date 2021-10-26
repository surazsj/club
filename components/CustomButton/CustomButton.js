import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

const CustomButton = ({ place}) => {
    return (
        <Pressable style= {styles.container}>
             <Text style= {styles.text}>
        
            {place}

             </Text> 
            
        </Pressable>
    )
}

const styles = StyleSheet.create ({
    container: {
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor : '#5a3cb5',
        width: '85%',
        padding: 15,
        marginVertical: 5,
        borderRadius: 50,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    }
})

export default CustomButton;
