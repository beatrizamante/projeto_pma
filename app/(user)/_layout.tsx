import React, { useEffect } from "react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Stack, useRouter } from "expo-router";
import { useAuth } from "../../stores/useAuth";

export default function UserLayout() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated]);

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
