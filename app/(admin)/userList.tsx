import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import List from "../../components/list/item/List";
import { User } from "../interfaces/user";
import { list } from "../../infrastructure/repository/UserRepository";

export default function userList() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const allUsers = await list();
      if (!allUsers) return;
      setUsers(allUsers);
    };
    fetchUsers();
  });

  const createHandler = () => {
    router.replace("/userManagement");
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 24,
          paddingBottom: 160,
          flexGrow: 1,
        }}
      >
        <View className="flex-1 justify-between items-center px-6">
          <View className="flex flex-col justify-center items-center gap-4 mb-2">
            <Text className="text-darker text-center text-lg font-semibold">
              Double click an user to edit:
            </Text>
            <List data={users} navigateTo="/(admin)/userManagement" />
            <Button content="Create new user!" onPress={createHandler} />
          </View>
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}
