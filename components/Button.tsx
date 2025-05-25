import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

type ButtonProps = {
  content: string;  
  onPress: () => void;
};

export default function Button({ onPress, content }: ButtonProps) {
  return (
    <View>
      <TouchableOpacity 
      onPress={onPress} 
      className="bg-semidark px-[30px] py-3 w-[160px] h-[36px] flex justify-center items-center rounded-[42px] border-semilight border shadow-black shadow-lg">
        <Text className="text-semilight text-xl font-semibold text-center">{content}</Text>
      </TouchableOpacity>
    </View>
  );
}
