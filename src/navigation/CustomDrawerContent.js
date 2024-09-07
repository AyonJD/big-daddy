import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {TestIds, BannerAd} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
  ? TestIds.ADAPTIVE_BANNER
  : 'ca-app-pub-6750866851453330/9915351875';

const CustomDrawerContent = props => {
  const parentWidth = 200;
  const parentHeight = 60;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Goa Games</Text>
      </View>

      {/* Drawer Items */}
      <View style={styles.drawerItems}>
        {/* Center the AdMob Banner */}
        <View style={styles.adContainer}>
          <BannerAd unitId={adUnitId} size={`${parentWidth}x${parentHeight}`} />
        </View>

        {/* Home button directly below the ad */}
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => props.navigation.navigate('Game')}>
          {/* <Ionicons name="home-outline" size={30} color="#D3AE1F" /> */}
          {/* <Icon name="home" type="ionicon" size={30} color="#D3AE1F" /> */}
          <Text style={styles.homeText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D3AE1F',
  },
  drawerItems: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  adContainer: {
    width: 250,
    alignItems: 'center',
    marginVertical: 10,
  },
  homeButton: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    backgroundColor: '#F7E7A4',
    width: '90%',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    marginTop: 10,
    paddingVertical: 16,
    marginLeft: -25,
  },
  homeText: {
    fontSize: 19,
    marginLeft: 10,
    color: '#D3AE1F',
  },
});
