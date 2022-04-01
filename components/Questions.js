import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Questions = () => {
  return (
   <>  
    <SafeAreaView style={{alignItems: 'center'}}>
      <TouchableOpacity style={styles.btn} activeOpacity={1}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>SECTION 'A'</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
   </>  
  )
}

export default Questions

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        width: '95%',
        borderWidth: 1,
        padding: 8,
        backgroundColor: 'black',
        borderRadius: 10,
        marginVertical: 20,
      },
})