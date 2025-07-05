import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Stack, useRouter } from "expo-router";
import { useAuth } from "../../stores/useAuth";

export default function UserLayout() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated]);

  if (!isAuthenticated)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  return (
    <ActionSheetProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="videoList" options={{ headerShown: false }} />
        <Stack.Screen name="videoManagement" options={{ headerShown: false }} />
        <Stack.Screen name="peopleList" options={{ headerShown: false }} />
        <Stack.Screen name="findPeople" options={{ headerShown: false }} />
      </Stack>
    </ActionSheetProvider>
  );
}
