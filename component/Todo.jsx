import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Todo = ({ title }) => {
  return (
    <View>
      <Text style={styles.todo}>✅{title}</Text>
    </View>
  )
}

export default Todo

const styles = StyleSheet.create({
  todo: {
    marginLeft: 15,
  }
})
