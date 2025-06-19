import {
  View,
  Image,
  Text,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

type ImageCardProps = {
  onPress?: () => void;
  title: string;
  content: string;
  uri: ImageSourcePropType;
};

export default function Card({ onPress, title, content, uri }: ImageCardProps) {
  return (
    <View className="w-[165px] h-[228px] flex flex-col justify-center items-center border border-darker rounded-[25px] shadow-black shadow-lg bg-semilight">
      <TouchableOpacity
        onPress={onPress}
        className="flex justify-center items-center gap-4"
      >
        <Image
          source={uri}
          className="w-max-[165px] h-max-[120px] px-4"
        ></Image>
        <View className="gap-2 px-2">
          <Text className="text-center text-lg text-darker font-semibold">
            {title}
          </Text>
          <Text className="text-center text-darker font-semibold">
            {content}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
