import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// 🔹 ubah: tambahkan prop darkMode
const Users = ({name, email, phone, darkMode}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: darkMode ? '#222' : '#fff', // 🔹 ubah: background ikut mode
          borderColor: darkMode ? '#888' : 'black',   // 🔹 ubah: border ikut mode
        },
      ]}>
      <Text style={{color: darkMode ? '#fff' : '#000'}}> {name} </Text>
      <Text style={{color: darkMode ? '#ccc' : '#333'}}> {email} </Text>
      <Text style={{color: darkMode ? '#aaa' : '#555'}}> {phone} </Text>
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
});
