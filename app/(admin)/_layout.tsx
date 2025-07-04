import React, { useEffect } from "react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Stack, useRouter } from "expo-router";
import { useAuth } from "../../stores/useAuth";

export default function AdminLayout() {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated || user?.role !== "admin") {
      router.replace("/");
    }
  }, [isAuthenticated]);

  return (
    <ActionSheetProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="userList" options={{ headerShown: false }} />
        <Stack.Screen name="userManagement" options={{ headerShown: false }} />
        <Stack.Screen name="peopleList" options={{ headerShown: false }} />
        <Stack.Screen
          name="peopleManagement"
          options={{ headerShown: false }}
        />
      </Stack>
    </ActionSheetProvider>
  );
}
