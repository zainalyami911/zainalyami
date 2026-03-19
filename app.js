import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>Zezo Game - Match 3</title>
  <style>
    :root{
      --bg1:#2b1a4a; --bg2:#4a2a7a; --panel:#ffffff14; --panel-border:#ffffff30;
      --text:#fff5ff; --accent:#ffda6b; --danger:#ff6b8b; --ok:#73f2b5; --shadow:0 10px 30px rgba(0,0,0,.35);
    }
    *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
    html,body{height:100%;margin:0;font-family:Inter,system-ui,sans-serif;background:radial-gradient(circle at 20% 10%,#5f3fa2 0%,var(--bg2) 30%,var(--bg1) 100%);color:var(--text);overflow:hidden}
    .app{height:100%;display:flex;flex-direction:column}
    .safe{padding:env(safe-area-inset-top) env(safe-area-inset-right) calc(env(safe-area-inset-bottom) + 8px) env(safe-area-inset-left);height:100%;display:flex;flex-direction:column}
    .topbar{display:flex;gap:10px;align-items:center;justify-content:space-between;padding:8px 10px}
    .pill{background:var(--panel);border:1px solid var(--panel-border);padding:10px 12px;border-radius:14px;box-shadow:var(--shadow);backdrop-filter:blur(4px);font-weight:700;font-size:14px;min-width:95px;text-align:center}
    .centerArea{flex:1;display:grid;place-items:center;padding:8px}
    .boardWrap{position:relative;width:min(92vw,92vh,780px);aspect-ratio:1/1;border-radius:20px;background:linear-gradient(180deg,#ffffff18,#00000022);border:1px solid #ffffff3a;box-shadow:var(--shadow),inset 0 2px 10px rgba(255,255,255,.15);padding:10px}
    .grid{position:relative;width:100%;height:100%;border-radius:14px;overflow:hidden}
    .tile{position:absolute;display:grid;place-items:center;border-radius:16%;box-shadow:inset 0 2px 0 rgba(255,255,255,.45);color:#fff;font-weight:900;touch-action:none;transition:transform .22s cubic-bezier(.2,.8,.2,1)}
    .tile .emoji{font-size:clamp(18px,3.8vmin,34px)}
    .hudRow{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:8px 10px}
    .btn{border:none;border-radius:12px;padding:10px 14px;font-weight:800;color:#2f214f;background:linear-gradient(180deg,#ffe896,#ffc93e);cursor:pointer}
    .overlay{position:fixed;inset:0;background:rgba(15,9,30,.75);display:grid;place-items:center;z-index:9}
    .card{width:min(92vw,460px);background:linear-gradient(180deg,#6e47b9,#4e328e);border:1px solid #ffffff50;border-radius:18px;padding:22px;text-align:center}
    .title{font-size:32px;font-weight:900;margin:0 0 8px}
  </style>
</head>
<body>
<div class="app"><div class="safe">
    <div class="topbar">
      <div class="pill">Score: <span id="score">0</span></div>
      <div class="pill">Level: <span id="level">1</span></div>
      <div class="pill">Moves: <span id="moves">25</span></div>
    </div>
    <div class="centerArea"><div class="boardWrap"><div class="grid" id="grid"></div></div></div>
    <div class="hudRow">
      <button class="btn" id="rewardBtn">+5 Moves</button>
      <button class="btn" id="restartBtn">Restart</button>
    </div>
</div></div>
<div class="overlay" id="startOverlay">
  <div class="card"><h1 class="title">Zezo Game</h1><button class="btn" id="startBtn">Start Game</button></div>
</div>
<script>
  // كود اللعبة المختصر لضمان العمل
  (() => {
    const SIZE = 8;
    const TYPES = [{e:"🍭",c:"#ff5da2"},{e:"🍬",c:"#6ad6ff"},{e:"🧸",c:"#7fe28a"},{e:"🍩",c:"#ffa657"},{e:"🧁",c:"#b794ff"},{e:"🍫",c:"#ffd86b"}];
    let board = [], score = 0, level = 1, moves = 25;
    const grid = document.getElementById("grid");
    function initBoard(){
      board = Array.from({length:SIZE},()=>Array(SIZE).fill(null));
      for(let r=0;r<SIZE;r++) for(let c=0;c<SIZE;c++) board[r][c] = Math.floor(Math.random()*TYPES.length);
      render();
    }
    function render(){
      grid.innerHTML = "";
      const cell = grid.clientWidth / SIZE;
      for(let r=0;r<SIZE;r++) for(let c=0;c<SIZE;c++){
        const t = board[r][c];
        const d = document.createElement("div");
        d.className = "tile";
        d.style.left = (c*cell+4)+"px"; d.style.top = (r*cell+4)+"px";
        d.style.width = (cell-8)+"px"; d.style.height = (cell-8)+"px";
        d.style.background = TYPES[t].c;
        d.innerHTML = '<div class="emoji">'+TYPES[t].e+'</div>';
        grid.appendChild(d);
      }
    }
    document.getElementById("startBtn").onclick=()=>{
      document.getElementById("startOverlay").style.display="none";
      initBoard();
    };
  })();
</script>
</body>
</html>
  `;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#2b1a4a' }}>
      <StatusBar hidden />
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
