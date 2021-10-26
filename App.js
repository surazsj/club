import React from 'react';
import { View, Text, SafeAreaView, Touchable, StyleSheet } from 'react-native';
import Homescreen from './components/Screens/Homescreen/Homescreen';
import Signupscreen from './components/Screens/Signupscreen/Signupscreen';
const App = () => {
  return (
    <SafeAreaView styles={styles.root}>
    
    <Signupscreen />
  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
export default App;
