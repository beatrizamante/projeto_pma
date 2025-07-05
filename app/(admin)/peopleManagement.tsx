import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Input from "../../components/form/Input";

export default function PeopleManagement() {
  const router = useRouter();

  const [label, setLabel] = useState<string>("");

  const handleCreate = () => {
    console.log("Criar nova pessoa:", { label });
    router.push("/(admin)/peopleList");
  };

  const handleBack = () => {
    router.back();
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
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex flex-col justify-center items-center gap-4 mb-2">
          <View className="flex flex-row justify-between items-center w-full px-7">
            <TouchableOpacity className="flex w-[140px]" onPress={handleBack}>
              <Text className="text-lg text-darker font-semibold text-center">
                Back
              </Text>
            </TouchableOpacity>
          </View>

          <Input
            label="label"
            value={label}
            handler={setLabel}
            isPassword={false}
          />
          <Button content="Upload person’s video" onPress={handleCreate} />
          <Text className="text-xl text-darker font-semibold text-center">
            You need the person’s individual video stream to be able to gather
            the hash
          </Text>
          <Text className="text-[32px] font-semibold text-center">OR</Text>
          <TouchableOpacity>
            <Text className="text-xl text-semidark font-semibold">
              Upload the hash here
            </Text>
          </TouchableOpacity>
          <Text className="text-sm text-darker font-semibold text-center">
            Check the format on the
          </Text>
          <TouchableOpacity>
            <Text className="text-xl text-semidark font-semibold">
              Documentation
            </Text>
          </TouchableOpacity>
          <Button content="Create new person!" onPress={handleCreate} />
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}
