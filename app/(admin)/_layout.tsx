import React from "react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Redirect, Stack } from "expo-router";
import { useAuth } from "../../stores/useAuth";

export default function AdminLayout() {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated || user?.role !== "admin") {
    return <Redirect href="/" />;
  }

  return (
    <ActionSheetProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="userList" options={{ headerShown: false }} />
        <Stack.Screen name="userManagement" options={{ headerShown: false }} />
      </Stack>
    </ActionSheetProvider>
  );
}
