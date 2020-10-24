import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Image, TextInput, Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const sanitize = (txt, setter) =>{
  if (txt.length === 0 || Number.isNaN(txt, set)) {
    set = 0;
    return 0;
  }
  else{
    return parseFloat(txt);
  }
};


const add2numbers = () =>{
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(0);

  return (
  <View style = {styles.container}>

  <Image />

<Text> Add 2 Numbers
  </Text>
<TextInput style={{
height: 40,
borderColor: 'gray',
borderWidth: 1,
width: 130,
marginBottom: 5,

}}
defaultValue="0"
value={num1.toString()}
onChangeText={
  (text) => {
    setNum1(txt);
  }}/>

<TextInput style={{
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  width: 130,
  marginBottom: 5,
  
  }}
  defaultValue="0"
  value={num2.toString()}
  onChangeText={
    (text) => {
      setNum2(txt);
    }}/>

    <Button
            onPress={() => {
              setTotal(inputSanitizer(num1, setNum1) + inputSanitizer(num2, setNum2));
            }}
            title="Add"
          />
          <View>
            <Text>
            Result =
          {' '}
          {total}
        </Text>
      </View>
      </View>
  );

};

export default Add;