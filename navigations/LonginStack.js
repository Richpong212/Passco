import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login'

const Stack = createNativeStackNavigator();


const LonginStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

export default LonginStack