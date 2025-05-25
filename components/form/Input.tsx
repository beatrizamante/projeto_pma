import { View, Text } from 'react-native'
import React from 'react'

type InputProps = {
  label: string;  
};

export default function Input({ label }: InputProps) {
  return (
    <View>
      <Text>{label}</Text>
      <input  />
    </View>
  )
}