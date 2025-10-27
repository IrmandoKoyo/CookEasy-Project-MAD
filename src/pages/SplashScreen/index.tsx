import React, { useEffect } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Logo from "../../assets/Logokami.svg";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Splash">;

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    // pindah ke halaman login setelah 2.5 detik
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#02CF8E" barStyle="light-content" />
      <Logo width={150} height={150} />
      <Text style={styles.title}>CookEasy</Text>
      <Text style={styles.subtitle}>Discover • Cook • Enjoy</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#02CF8E",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Poppins-Medium",
    fontSize: 36,
    color: "#FFFFFF",
    marginTop: 15,
    letterSpacing: 1,
  },
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    color: "#E8F9F3",
    marginTop: 6,
  },
});
