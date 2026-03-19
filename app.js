import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>Zezo Game</title>
  <style>
    :root{--bg1:#2b1a4a; --bg2:#4a2a7a; --text:#fff5ff; --accent:#ffda6b;}
    body{margin:0; background:radial-gradient(circle, #5f3fa2, var(--bg1)); color:var(--text); overflow:hidden; font-family:sans-serif;}
    .app{height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center;}
    .btn{padding:15px 30px; font-size:20px; font-weight:bold; background:var(--accent); border:none; border-radius:12px; color:#2b1a4a;}
  </style>
</head>
<body>
  <div class="app">
    <h1 id="status">Zezo Game</h1>
    <button class="btn" onclick="document.getElementById('status').innerText='Game Started!'">Start Play</button>
  </div>
</body>
</html>
`;

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#2b1a4a' }}>
      <StatusBar hidden={true} />
      <WebView 
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </SafeAreaView>
  );
}
