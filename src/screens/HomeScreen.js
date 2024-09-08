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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MainGame', {
                url: 'https://bdg3.com/#/register?invitationCode=177663373213',
                isrotate: false,
              })
            }>
            <View style={[styles.imageContainer, {height: 200, marginBottom:20}]}>
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

      {/* Move the BannerAd into its own container */}
      <View style={styles.adContainer}>
        <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#62625F',
  },
  scrollContent: {
    paddingVertical: 0, // Remove extra padding
  },
  content: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 8, // Adjust padding if needed
  },
  imageContainer: {
    width: 200,
    height: 170,
    marginBottom: 5, // Reduced margin bottom
    justifyContent: 'center',
    alignItems: 'center',
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
  adContainer: {
    alignItems: 'center',
    paddingVertical: 8, // Adjust the padding around the ad if needed
  },
});
