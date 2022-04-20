import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import { all_action } from './redux/action';
function app(){console.log('run');return 1}
const Main = ({
    params,
}) => {
    
  const [count,setCount] = useState(app())
  function increment(){
    setCount(p=>p+1) 
        setCount(p=>p+1)
  }
  function decrement(){
    setCount(p=>p-1)
    setCount(p=>p-1)
  }
  return(
 
      <View style={{alignItems:"center",justifyContent:"center",flex:1}}>
        <Button onPress={increment} title='   +   '></Button>
        <Text>{count}</Text>
        <Button onPress={decrement} title='   -   '></Button>
    </View>
 
);}

export default Main;
