import { View, Image, ImageSourcePropType } from "react-native";
import React from "react";

type videoIconProps = {
  thumbnail: ImageSourcePropType;
};

export default function VideoIcon({ thumbnail }: videoIconProps) {
  return (
    <View>
      <Image
        source={thumbnail}
        className="w-max-[335px] h-max-[340px] w-full h-full"
      ></Image>
    </View>
  );
}
