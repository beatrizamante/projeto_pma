import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Input from "../../components/form/Input";
import { useSelectedItem } from "../../stores/useSelectedItem";
import {
  erase,
  get,
  patch,
  store,
  UserSchema,
} from "../../infrastructure/repository/UserRepository";
import DropDown from "../../components/form/Dropdown";
import ConfirmationModal from "../../components/ConfirmationModal";

export default function UserManagement() {
  const router = useRouter();
  const { selectedId, clear } = useSelectedItem();
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"user" | "admin">("user");
  const [password, setPassword] = useState("");
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

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

  const handleConfirmDelete = async () => {
    await erase(selectedId!);
    clear();
    console.log("DELETE CONFIRMED!");
    setConfirmModalVisible(false);
    router.replace("/userList");
  };

  const handleUpdate = async () => {
    await patch(selectedId!, { name, email, password, role });
    clear();
    router.replace("/(admin)/userList");
  };

  const handleDelete = async () => {
    setConfirmModalVisible(true);
    console.log("Deletar usuário:", selectedId);
  };

  const handleCreate = async () => {
    const parse = UserSchema.safeParse({
      name,
      email,
      role: role.toLowerCase(),
      password,
    });

    if (!parse.success) {
      Alert.alert("The values were not validated.");
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
              <TouchableOpacity className="w-7 h-7" onPress={handleDelete}>
                <Image source={require("../../assets/Vector.png")} />
              </TouchableOpacity>
            </View>
          ) : (
            <View className="mt-4">
              <Button content="Create user" onPress={handleCreate} />
            </View>
          )}
        </View>
      </ScrollView>
      <Footer />

      <ConfirmationModal
        content="user"
        visible={confirmModalVisible}
        onConfirm={handleConfirmDelete}
        onCancel={() => setConfirmModalVisible(false)}
      />
    </>
  );
}
