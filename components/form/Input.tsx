import { View, Text, TextInput } from 'react-native'
import React from 'react'

type InputProps = {
  label: string;
};

export default function Input({ label }: InputProps) {
  return (
    <View className="w-[350px] h-[70px] relative border border-semidark rounded-[25px] bg-semilight shadow-black shadow-lg px-4 pt-3 mb-10">
      <Text className="absolute top-1 left-4 text-lg font-semibold text-semidark px-1">
        {label}
      </Text>
      <TextInput
        className="h-full text-lg text-darker "
      />
    </View>
  )
}
