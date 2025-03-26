import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const excercise2 = () => {
  return (
    <ImageBackground
      source={require('./asset/bg3.jpg')}
      style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <Image
              source={require('./asset/provil.jpeg')}
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.name}>Grivin Brayen Keyeh</Text>
          <Text style={styles.profession}>Sistem Informasi</Text>
        </View>

        {/* Deskripsi Singkat */}
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.description}>
            Saya adalah mahasiswa Universitas Klabat angkatan 2022, Fakultas
            Ilmu Komputer, jurusan Sistem Informasi. Saat ini saya berada di
            semester 6.
          </Text>

          {/* Informasi Kontak */}
          <Text style={styles.sectionTitle}>Contact</Text>
          <View style={styles.contactContainer}>
            <Text style={styles.contactText}>
              📧 S22210426@student.unklab.ac.id
            </Text>
            <Text style={styles.contactText}>📞 +62 815 4330 1051</Text>
            <Text style={styles.contactText}>💻 GitHub: grivin1028</Text>
          </View>

          {/* Formulir Pesan */}
          <Text style={styles.sectionTitle}>Get in Touch</Text>
          <TextInput
            style={styles.input}
            placeholder="Your message..."
            placeholderTextColor="gray"
          />

          {/* Tombol Kirim */}
          <TouchableOpacity style={styles.button} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default excercise2;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flexGrow: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  profileContainer: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#D32F2F',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D32F2F',
    marginTop: 10,
  },
  profession: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#D32F2F',
  },
  content: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Transparan
    margin: 15,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#D32F2F',
    marginBottom: 10,
    marginTop: 15,
  },
  description: {
    fontSize: 16,
    color: '#D32F2F',
    textAlign: 'justify',
    marginBottom: 15,
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  contactContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  contactText: {
    fontSize: 16,
    color: '#D32F2F',
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#D32F2F',
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Transparan
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#D32F2F',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
