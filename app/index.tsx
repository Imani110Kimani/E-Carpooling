import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { View, Text } from "react-native";

const Page = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.replace("/tabs/home"); // Navigate to home if signed in
    } else {
      router.replace("/auth/welcome"); // Navigate to welcome if not signed in
    }
  }, [isSignedIn]);

  return (
    <View>
      <Text>Redirecting...</Text>
    </View>
  );
};

export default Page;
