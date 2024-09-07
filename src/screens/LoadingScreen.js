import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import loadingImage from '../assets/2.png';

const LoadingScreen = ({navigation}) => {
  useEffect(() => {
    // Set a timeout to navigate after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={loadingImage} style={styles.image} />

      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
