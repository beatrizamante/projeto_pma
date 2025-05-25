import { View, Text, Pressable, Image } from 'react-native';
import * as Linking from 'expo-linking';

export default function Footer() {
  const handleGitHubPress = () => {
    Linking.openURL('https://github.com/beatrizamante/projeto_pma');
  };

  return (
    <View className="absolute bottom-0 left-0 right-0 h-[141px] bg-darker flex-row justify-between px-6 items-end py-6">
      <Text className="text-lg text-lighter font-semibold">
        © 2025 WatchMe — All rights reserved
      </Text>
      <Pressable onPress={handleGitHubPress}>
         <Image
          source={require("../assets/github.svg")}
        ></Image>
      </Pressable>
    </View>
  );
}
