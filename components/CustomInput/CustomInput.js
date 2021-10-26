import React from 'react'
import { View, Text, TextInput, StyleSheet} from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput 
            value={value} 
            onChangeText={setValue}  
            style={styles.input} 
            placeholder= {placeholder} 
            secureTextEntry= {secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    backgroundColor: '#F9FBF2',
    width: '100%',
    height: '10%',
    maxHeight: 100,
    borderColor: '#5a3cb5',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 20,

    paddingHorizontal: 10,
    marginVertical: 5,
    },
    input: {
        width: '100%',
       marginLeft: 10,
       marginTop: 15,
       fontSize: 16,

    }
})

export default CustomInput
