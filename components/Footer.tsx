import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Footer() {
  return (
    <View style={style.container}>
      <Text style={style.text}>We take you where you need to be . . .</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    width: 380,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#F6F1ED", 
    height: 50
  },
  text: {
    fontSize: 18,
    fontWeight: "semibold",
    color: "#243046",
  }
})
