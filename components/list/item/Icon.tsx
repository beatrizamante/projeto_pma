import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

type IconProps = {
    onPress: () => void;
}

export default function Icon({ onPress }: IconProps) {
  return (
    <View>
        <TouchableOpacity className="w-7 h-7" onPress={onPress}>
            <Image source={require("../../../assets/Vector.png")}></Image>
        </TouchableOpacity> 
    </View>
  )
}