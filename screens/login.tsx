import { StatusBar } from "expo-status-bar";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

export const Login = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white px-8">
      <StatusBar style="auto" />
      <View className="bg-slate-100 rounded-xl p-8 w-72">
        <TextInput
          className="rounded-md p-1 mb-3 border border-slate-200"
          placeholder="Enter email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          className="rounded-md p-1 mb-3 border border-slate-200"
          placeholder="Enter password"
          textContentType="password"
          secureTextEntry={true}
        />
        <TouchableOpacity className="bg-blue-400 p-2 rounded-md ">
          <Text className="text-white text-center">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
