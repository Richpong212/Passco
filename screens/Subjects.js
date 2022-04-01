import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Subjects = () => {
  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <TouchableOpacity style={styles.btn} activeOpacity={1}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>SELECT  SUBJECTS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sub}>
          <Text style={styles.txt}>Social Studies</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sub}>
          <Text style={styles.txt}>Integrated Science</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  )
}

export default Subjects

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        width: '95%',
        borderWidth: 1,
        padding: 8,
        backgroundColor: 'black',
        borderRadius: 10,
        marginVertical: 20,
        marginTop: 50,
        marginBottom: 120,
      },

      txt: {
          fontWeight: '700',
          fontSize: 16
      },
      sub: {
          marginVertical: 20
      }
})