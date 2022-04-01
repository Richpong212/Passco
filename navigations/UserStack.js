import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Subjects from '../screens/Subjects'

const Stack = createNativeStackNavigator();


const UserStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Subjects" component={Subjects} />
    </Stack.Navigator>
  )
}

export default UserStack