import React from 'react';
import {Text, View} from 'react-native';

const HelloWorldApp = () => {
  return(
    <View style={{
       flex:1,        //Fill item in available space.
       justifyContent:'center',         //align children of container in the center of container's main axis.
       alignItems:'center'              //align children of container in the center of container's cross axis.
    }}>
       <Text>Hello</Text>
    </View>
  )
}
export default HelloWorldApp;
