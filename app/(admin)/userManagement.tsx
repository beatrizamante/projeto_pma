import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Input from "../../components/form/Input";
import { useSelectedItem } from "../../stores/useSelectedItem";
import Icon from "../../components/list/item/Icon";
import {
  erase,
  get,
  patch,
  store,
  UserSchema,
} from "../../infrastructure/repository/UserRepository";
import DropDown from "../../components/form/Dropdown";

export default function UserManagement() {
  const router = useRouter();
  const { selectedId, clear } = useSelectedItem();
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"user" | "admin">("user");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      if (selectedId) {
        const user = await get(selectedId);
        if (user) {
          setname(user.name);
          setEmail(user.email);
          setRole(user.role as "user" | "admin");
          return;
        }
      }
      setname("");
      setEmail("");
      setPassword("");
      setRole("user");
    };

    fetchUser();
  }, [selectedId]);

  const handleUpdate = async () => {
    await patch(selectedId!, { name, email, password, role });
    console.log("Atualizar usuário:", { name, email, role, password });
    clear();
    router.replace("/(admin)/userList");
  };

  const handleDelete = async () => {
    await erase(selectedId!);
    console.log("Deletar usuário:", selectedId);
    clear();
    router.replace("/(admin)/userList");
  };

  const handleCreate = async () => {
    const parse = UserSchema.safeParse({
      name,
      email,
      role,
      password,
    });

    if (!parse.success) {
      console.log(parse.error.format());
      return;
    }

    await store(parse.data);
    clear();
    router.replace("/(admin)/userList");
  };

  const handleBack = () => {
    clear();
    router.back();
  };

  const isEditing = !!selectedId;

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 24,
          paddingBottom: 160,
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex flex-col justify-center items-center gap-4 mb-2">
          <View className="flex flex-row justify-between items-center w-full px-7">
            <TouchableOpacity className="flex w-[140px]" onPress={handleBack}>
              <Text className="text-lg text-darker font-semibold text-center">
                Back
              </Text>
            </TouchableOpacity>
            <Text className="text-darker text-center font-semibold">
              {isEditing ? `Editing ${name}` : ""}
            </Text>
          </View>

          <Input
            label="name"
            value={name}
            handler={setname}
            isPassword={false}
          />
          <Input
            label="email"
            value={email}
            handler={setEmail}
            isPassword={false}
          />
          <Input
            label="password"
            value={password}
            handler={setPassword}
            isPassword={true}
          />
          <DropDown label="role" value={role} handler={setRole} />

          {isEditing ? (
            <View className="flex flex-row justify-between items-center gap-4 mt-4">
              <Button content="Update user" onPress={handleUpdate} />
              <Icon onPress={handleDelete} />
            </View>
          ) : (
            <View className="mt-4">
              <Button content="Create user" onPress={handleCreate} />
            </View>
          )}
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}
