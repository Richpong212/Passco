import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
         <View style={{marginTop: 40, alignItems: 'center'}}>
            <Image 
              source={{uri: 'https://images.unsplash.com/photo-1571442463800-1337d7af9d2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80'}}
              style={styles.img}
            />
            <Text style={styles.name}>Naana</Text>
            <Text>OYAREFA</Text>
         </View>
         
      </SafeAreaView> 

      <TouchableOpacity style={styles.btn}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn1}>
        <Text style={{color: 'black', fontSize: 16, fontWeight: '600'}}>SIGNUP</Text>
      </TouchableOpacity>

      <Text style={{marginVertical: 15}}>OR</Text>

      <TouchableOpacity style={styles.btn2}
        onPress={() => {}}
      >
        <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>CHECKOUT DEMO</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
      height: 160,
      width: 160,
      borderRadius: 80,
    },
    name: {
      fontSize: 30,
      marginTop: 15,
      marginBottom: 5,
      letterSpacing: 2,
      fontWeight: '600'
    },
    btn: {
      alignItems: 'center',
      width: '95%',
      borderWidth: 1,
      padding: 8,
      backgroundColor: 'black',
      borderRadius: 10,
      marginVertical: 20,
    },
    btn1: {
      alignItems: 'center',
      width: '95%',
      borderWidth: 1,
      padding: 8,
      backgroundColor: 'white',
      borderRadius: 10,
    },

    btn2: {
      alignItems: 'center',
      width: '95%',
      borderWidth: 1,
      padding: 8,
      backgroundColor: 'green',
      borderRadius: 10,
    }
})