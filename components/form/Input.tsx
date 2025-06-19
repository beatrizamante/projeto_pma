import { View, Text, TextInput } from "react-native";
import React from "react";

type InputProps = {
  label: string;
  value: string;
  handler: (text: string) => void;
};

export default function Input({ label, value, handler }: InputProps) {
  return (
    <View className="w-[350px] h-[70px] border border-semidark rounded-[25px] bg-semilight shadow-black shadow-lg px-4 pt-3">
      <Text className="absolute top-1 left-4 text-lg font-semibold text-semidark px-1">
        {label}
      </Text>
      <TextInput
        className="h-full text-lg text-darker"
        onChangeText={handler}
        value={value}
        keyboardType="default"
        secureTextEntry={true}
      />
    </View>
  );
}
