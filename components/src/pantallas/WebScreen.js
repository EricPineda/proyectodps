import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
export default function WebScreen({ route, navigation }) {
  const { url } = route.params;

  return <WebView style={styles.webSize} source={{ uri: url }}></WebView>;
}
const styles = StyleSheet.create({
  webSize: {
    width: '100%',
    height: '100%',
  },
});
