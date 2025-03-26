import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Input from './components/input';
import Button from './components/button';
import Title from './components/title';

const Exercise3 = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = () => {
    console.log('Nama:', name);
    // You can also log other fields if needed
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Address:', address);
    console.log('No Tlp:', phone);
  };

  return (
    <View style={styles.container}>
      <Title />
      <Input
        label="Nama"
        placeholder="Masukan Nama anda"
        value={name}
        onChangeText={setName}
      />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        value={username}
        onChangeText={setUsername}
      />
      <Input
        label="Password"
        placeholder="Masukan password anda"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Input
        label="Address"
        placeholder="Masukan alamat anda"
        value={address}
        onChangeText={setAddress}
      />
      <Input
        label="No Tlp"
        placeholder="Masukan nomor tlpn anda"
        value={phone}
        onChangeText={setPhone}
      />
      <Button label="Register" color="orange" onPress={handleRegister} />
    </View>
  );
};

export default Exercise3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
  },
});
