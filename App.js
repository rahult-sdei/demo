import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import Main from './src/index';
import { configureStore } from './src/redux';

const App = ({
    params,
}) => {
 let {store} = configureStore()
  
  return(
    <View style={{flex:1}}>
    <Provider store={store}>
   
        <Main/>
  
    </Provider>
    </View>
);}

export default App;
