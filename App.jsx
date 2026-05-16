import { useState } from "react";
import "./App.css";
import bgImage from "./lunch-bg.png"; // ← 追加


const MENUS = [
  { label: "寿司", emoji: "🍣" },
  { label: "カレー", emoji: "🍛" },
  { label: "ラーメン", emoji: "🍜" },
  { label: "ホットケーキ", emoji: "🥞" },
  { label: "ケンタッキー", emoji: "🍗" },
];

export default function App() {
  const [result, setResult] = useState(null);
  const [spinning, setSpinning] = useState(false);

  const handleSpin = () => {
    setSpinning(true);
    setResult(null);
    setTimeout(() => {
      const random = MENUS[Math.floor(Math.random() * MENUS.length)];
      setResult(random);
      setSpinning(false);
    }, 600);
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
<div className="bg" style={{ backgroundImage: `url(${bgImage})` }}>      <div className="card">
        <h1 className="title">🍽 今日のランチは？</h1>

        <div className="result-box">
          {spinning && <p className="hint">選んでいます…</p>}
          {!spinning && result && (
            <p className="result">
              {result.emoji} {result.label}
            </p>
          )}
          {!spinning && !result && (
            <p className="hint">ボタンを押してね</p>
          )}
        </div>

        <div className="buttons">
          <button className="btn btn-spin" onClick={handleSpin}>
            ランチを選ぶ
          </button>
          <button className="btn btn-reset" onClick={handleReset}>
            リセット
          </button>
        </div>
      </div>
    </div>
  );
}
