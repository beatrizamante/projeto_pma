import React from "react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Redirect, Stack } from "expo-router";
import { useAuth } from "../../stores/useAuth";

export default function UserLayout() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/" />;
  }

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
