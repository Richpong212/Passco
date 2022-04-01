import React  from 'react'
import { NavigationContainer } from '@react-navigation/native';
import LonginStack from './LonginStack';
import UserStack from './UserStack';


const RootNav = () => {
  return (
    <NavigationContainer>
        <LonginStack />
    </NavigationContainer>
  )
}

export default RootNav