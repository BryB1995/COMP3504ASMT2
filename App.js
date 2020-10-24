
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import add2numbers from './components/add1.jsx';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default function App() {
    return ( <View style = { styles.container }>
        <Text> Add two numbers </Text> 
        <add2numbers/>
        </View>
    );
}


