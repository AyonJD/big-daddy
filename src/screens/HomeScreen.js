import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import masterLinkImg from '../assets/1.png';
import {GAMES} from '../constant/constant';

import {TestIds, BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';
const adUnitId = __DEV__
  ? TestIds.ADAPTIVE_BANNER
  : 'ca-app-pub-6750866851453330/9915351875';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#D3AE1F" />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Play Goa games 2024</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MainGame', {
                url: 'https://bdg3.com/#/register?invitationCode=177663373213',
                isrotate: false,
              })
            }>
            <View style={styles.imageContainer}>
              <Image
                source={masterLinkImg}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>

          {GAMES.map((game, i) => (
            <TouchableOpacity
              key={i}
              onPress={() =>
                navigation.navigate('MainGame', {
                  url: game.url,
                  isrotate: true,
                })
              }>
              <View style={styles.imageContainer}>
                <Image
                  source={game.image}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#62625F',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
  },
  imageContainer: {
    width: 200,
    height: 200,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#D3AE1F',
  },
});
