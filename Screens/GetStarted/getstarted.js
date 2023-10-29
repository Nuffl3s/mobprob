import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GetStarted = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('Login'); // Navigate to the "Login" screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.honeycombTopLeft} />
      <View style={styles.honeycombBottomRight} />

      <View style={styles.messageContainer}>
        <Text style={styles.welcomeText}>WELCOME TO</Text>
      </View>

      <View style={styles.logo}>
        <Text style={styles.logoname}>
          <Text style={styles.proText}>MO</Text>
          <Text style={styles.goText}>MO</Text>
        </Text>
      </View>

      <View>
        <Text style={styles.descripText}>Explore profiles, connect, and discover common interests easily.</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleGetStarted}
          style={styles.customButton}
        >
          <Text style={styles.buttonText}>Get Started!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212326',
    justifyContent: 'center',
    alignItems: 'center',
  },
  honeycombTopLeft: {
    position: 'absolute',
    top: -150,
    left: -160,
    borderRadius: 300,
    width: 350,
    height: 350,
    backgroundColor: 'white',
    transform: [{ rotate: '45deg' }],
  },
  honeycombBottomRight: {
    position: 'absolute',
    borderRadius: 300,
    bottom: 1,
    right: -180,
    width: 350,
    height: 350,
    backgroundColor: 'white',
    transform: [{ rotate: '45deg' }],
  },
  messageContainer: {
    marginBottom: 0,
  },
  welcomeText: {
    fontSize: 30,
    marginBottom: 20,
    color: '#FFF',
    fontWeight: '600',
  },
  logoname: {
    fontSize: 80,
    color: '#FFF',
  },
  proText: {
    fontSize: 80,
    color: '#FFF',
    fontWeight: '900',
  },
  goText: {
    fontSize: 80,
    color: '#FFAB49',
    fontWeight: '900',
  },
  descripText: {
    fontSize: 20,
    marginBottom: 30,
    marginTop: 30,
    color: '#FFF',
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 20,
  },
  customButton: {
    backgroundColor: '#FFAB49',
    height: 55,
    width: 315,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '900',
  },
});

export default GetStarted;