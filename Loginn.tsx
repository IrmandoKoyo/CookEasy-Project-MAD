import React, { FC } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextStyle,
  ViewStyle,
  ImageStyle,
} from "react-native";

const LoginPage: FC = () => {
  return (
    <View style={styles.container}>

      {/* Logo Besar */}
      <Image
        source={require("./src/assets/Icon/Logokami.svg")} // sama kayak register
        style={styles.logo}
      />

      {/* Judul */}
      <Text style={styles.title}>Masuk ke akun anda</Text>

      {/* Input Email */}
      <View style={styles.inputContainer}>
        <Image
          source={require("./assets/Icon/mail.png")} // sama kayak register
          style={styles.icon}
        />
        <TextInput
          placeholder="Masukan email anda"
          style={styles.input}
          keyboardType="email-address"
        />
      </View>

      {/* Input Password */}
      <View style={styles.inputContainer}>
        <Image
          source={require("./assets/Icon/key.png")} // sama kayak register
          style={styles.icon}
        />
        <TextInput
          placeholder="Masukan kata sandi anda"
          style={styles.input}
          secureTextEntry
        />
      </View>

      {/* Lupa password & daftar */}
      <View style={styles.links}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Mendaftar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Lupa kata sandi?</Text>
        </TouchableOpacity>
      </View>

      {/* Tombol Masuk */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Masuk</Text>
      </TouchableOpacity>

      {/* Separator */}
      <Text style={styles.or}>Atau</Text>
      <Text style={styles.orSub}>Masuk dengan</Text>

      {/* Icon Sosmed */}
      <Image
        source={require("./assets/Icon/google.png")} // sama kayak register
        style={styles.socialIcon}
      />

      {/* Footer */}
      <Text style={styles.foot}>CookEasy</Text>
    </View>
  );
};

export default LoginPage;

type Style = {
  container: ViewStyle;
  title: TextStyle;
  inputContainer: ViewStyle;
  icon: ImageStyle;
  input: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  links: ViewStyle;
  linkText: TextStyle;
  or: TextStyle;
  orSub: TextStyle;
  socialIcon: ImageStyle;
  logo: ImageStyle;
  foot: TextStyle;
};

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: "#eef9f5",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 40,
    marginTop: 13,
    resizeMode: "contain",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#21a496",
    marginBottom: 20,
    textAlign: "left",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#22a5974c",
    borderRadius: 18,
    paddingHorizontal: 10,
    marginBottom: 10,
    height: 50,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  button: {
    backgroundColor: "#009885",
    borderRadius: 38,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  links: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  linkText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#009885",
  },
  or: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "#009885",
    marginTop: 20,
  },
  orSub: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "700",
    color: "#009885",
    marginTop: 10,
    marginBottom: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
    alignSelf: "center",
    marginBottom: 20,
  },
  
  foot: {
    fontSize: 22,
    fontWeight: "700",
    color: "#21a496",
    textAlign: "center",
    position: "absolute",   // biar nempel bawah
    bottom: 20,             // jarak dari bawah (atur sesuai selera)
    left: 0,
    right: 0,
  },

});
