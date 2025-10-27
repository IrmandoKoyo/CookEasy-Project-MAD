import React, { FC } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const RegisterPage: FC = () => {
  return (
    <View style={styles.container}>
      {/* Logo Besar */}
      <Image
        source={require("./assets/Icon/CookEasy.png")} // ganti logo sesuai path
        style={styles.logo}
      />

      {/* Judul */}
      <Text style={styles.title}>Daftar untuk memulai</Text>

      {/* Input Nama */}
      <View style={styles.inputContainer}>
        <Image
          source={require("./assets/Icon/user.png")} // icon user
          style={styles.icon}
        />
        <TextInput
          placeholder="Masukan nama anda"
          style={styles.input}
        />
      </View>

      {/* Input Email */}
      <View style={styles.inputContainer}>
        <Image
          source={require("./assets/Icon/mail.png")} // icon email
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
          source={require("./assets/Icon/key.png")} // icon password
          style={styles.icon}
        />
        <TextInput
          placeholder="Masukan kata sandi anda"
          style={styles.input}
          secureTextEntry
        />
      </View>

      {/* Konfirmasi Password */}
      <View style={styles.inputContainer}>
        <Image
          source={require("./assets/Icon/key.png")} // icon password
          style={styles.icon}
        />
        <TextInput
          placeholder="Konfirmasi kata sandi anda"
          style={styles.input}
          secureTextEntry
        />
      </View>

      {/* Sudah punya akun */}
      <Text style={styles.smallText}>Sudah punya akun?</Text>

      {/* Tombol Daftar */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Mendaftar</Text>
      </TouchableOpacity>

      {/* Separator */}
      <Text style={styles.or}>Atau</Text>
      <Text style={styles.orSub}>Mendaftar dengan</Text>

      {/* Sosmed (Google) */}
      <Image
        source={require("./assets/Icon/google.png")} // icon Google asli
        style={styles.socialIcon}
      />

      {/* Footer */}
      <Text style={styles.foot}>CookEasy</Text>
    </View>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
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
  smallText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#009885",
    marginBottom: 10,
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
