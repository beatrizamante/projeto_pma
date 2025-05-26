import { View, Text, Image, Pressable } from "react-native";
import * as Linking from "expo-linking";
import { Feather } from "@expo/vector-icons";
import { useAuth } from "../stores/useAuth";
import { useRouter } from "expo-router";
import React from "react";

export default function NavBar() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  return (
    <View
      className="flex-row items-center justify-between h-[86px] min-w-full bg-lighter"
      style={{
        shadowColor: "#000",
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
        elevation: 10,
      }}
    >
      <View className="py-6 px-6">
        <Image
          source={require("../assets/icon.png")}
          className="w-10 h-10"
        />
      </View>

      {isAuthenticated ? (
        <View>
          <Pressable
            onPress={() => router.push("/(user)/create")}
            className="px-6"
          >
            <Feather name="menu" size={28} color="#9B9293" />
          </Pressable>
        </View>
      ) : (
        <View className="flex-row space-x-8 px-6 pt-8">
          <Pressable
            onPress={() =>
              Linking.openURL(
                "https://zustand.docs.pmnd.rs/guides/tutorial-tic-tac-toe"
              )
            }
          >
            <Text className="text-lg font-semibold text-semidark">Docs</Text>
          </Pressable>
          <Pressable
            onPress={() =>
              Linking.openURL(
                "https://zustand.docs.pmnd.rs/guides/tutorial-tic-tac-toe"
              )
            }
          >
            <Text className="text-lg font-semibold text-semidark">About</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
