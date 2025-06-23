import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

type ButtonProps = {
  content: string;  
  onPress: () => void;
};

export default function Button({ onPress, content }: ButtonProps) {
  return (
    <View className="h-[70px]">
      <TouchableOpacity 
      onPress={onPress} 
      className="bg-semidark px-[30px] py-3 min-w-[160px] w-full min-h-[36px] h-full flex justify-center items-center rounded-[25px] border-semilight border shadow-black shadow-lg">
        <Text className="text-semilight text-xl font-semibold text-center">{content}</Text>
      </TouchableOpacity>
    </View>
  );
}
