import { initializeApp } from '@firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const firebaseConfig = {
  apiKey: "AIzaSyC9VgVock4xqzPkGbdAb9q6mwqZ51vU4xE",
  authDomain: "decomanage-79f2d.firebaseapp.com",
  projectId: "decomanage-79f2d",
  storageBucket: "decomanage-79f2d.appspot.com",
  messagingSenderId: "130454199337",
  appId: "1:130454199337:web:fb1a210ee17a21d6801038",
  measurementId: "G-BVPK785HJD"
};

const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAuth(FIREBASE_APP);

const AuthScreen = ({
  email,
  setEmail,
  password,
  setPassword,
  isLogin,
  setIsLogin,
  handleAuthentication
}) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>{isLogin ? 'Entrar' : 'Criar conta'}</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Senha"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button
          title={isLogin ? 'Login' : 'Criar conta'}
          onPress={handleAuthentication}
          color="#3498db"
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
          {isLogin
            ? 'Novo aqui? Criar conta'
            : 'Já possuo conta'}
        </Text>
      </View>
    </View>
  );
};

const AuthenticatedScreen = ({ user, handleAuthentication }) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.emailText}>{user.email}</Text>
      <Button title="Logout" onPress={handleAuthentication} color="#e74c3c" />
    </View>
  );
};

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, setUser);  // Fix to directly set user
    return () => unsubscribe();
  }, []);

  const handleAuthentication = async () => {
    try {
      if (user) {        
        console.log('User logged out successfully!');
        await signOut(FIREBASE_AUTH);
      } else {        
        if (isLogin) {          
          await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
          console.log('User signed in successfully!');
        } else {
          await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
          console.log('User created successfully!');
        }
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {user ? (
        <AuthenticatedScreen
          user={user}
          handleAuthentication={handleAuthentication}
        />
      ) : (
        <AuthScreen
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          handleAuthentication={handleAuthentication}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0'
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 3
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center'
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4
  },
  buttonContainer: {
    marginBottom: 16
  },
  toggleText: {
    color: '#3498db',
    textAlign: 'center'
  },
  bottomContainer: {
    marginTop: 20
  },
  emailText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20
  }
});

export default App;
