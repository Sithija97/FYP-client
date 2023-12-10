import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAppDispatch } from "../store";
import { login } from "../store/auth";

export const Login = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await dispatch(login({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <View className="flex-1 items-center justify-center bg-white px-8">
      <StatusBar style="auto" />
      <View className="bg-slate-100 rounded-xl p-8 w-72">
        <TextInput
          className="rounded-md p-1 mb-3 border border-slate-200"
          placeholder="Enter email"
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          className="rounded-md p-1 mb-3 border border-slate-200"
          placeholder="Enter password"
          textContentType="password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity className="bg-blue-400 p-2 rounded-md ">
          <Text className="text-white text-center" onPress={handleLogin}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
