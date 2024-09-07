import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';
import Orientation from 'react-native-orientation-locker';

const WebViewScreen = ({route}) => {
  const {url, isrotate} = route.params;
  const [dimensions, setDimensions] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      });
    };

    if (isrotate) {
      Orientation.lockToLandscape();
    }

    // Add an event listener to handle screen dimension changes
    const subscription = Dimensions.addEventListener(
      'change',
      updateDimensions,
    );

    return () => {
      Orientation.unlockAllOrientations();
      subscription?.remove();
    };
  }, [isrotate]);

  return (
    <View style={styles.container}>
      <WebView
        source={{uri: url}}
        style={{width: dimensions.width, height: dimensions.height}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebViewScreen;
