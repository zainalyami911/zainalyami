import { registerRootComponent } from 'expo';
import { WebView } from 'react-native-webview';
import React from 'react';

function App() {
  return (
    <WebView 
      source={require('./index.html')} 
      style={{ flex: 1 }} 
    />
  );
}

registerRootComponent(App);
