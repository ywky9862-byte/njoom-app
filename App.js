import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username.trim() !== '') {
      setIsLoggedIn(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {!isLoggedIn ? (
        <View style={styles.formContainer}>
          <Text style={styles.title}>🌟 تطبيق نجوم</Text>
          <Text style={styles.subtitle}>سجل دخولك للانضمام إلى الغرف الصوتية</Text>
          
          <TextInput
            style={styles.input}
            placeholder="أدخل اسم المستخدم..."
            placeholderTextColor="#888"
            value={username}
            onChangeText={setUsername}
          />
          
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>دخول</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.welcomeContainer}>
          <Text style={styles.title}>مرحباً بك، {username}! 🎉</Text>
          <Text style={styles.subtitle}>أنت الآن مستعد لاستكشاف الرومات الصوتية والهدايا.</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#AAA',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#1E1E1E',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#FFF',
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#121212',
  },
  welcomeContainer: {
    alignItems: 'center',
  },
});
