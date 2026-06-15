PROJECT STRUCTURE :

rhizosense/
│
├── App.jsx
├── pages/
│   ├── Home.jsx
│   └── Prediction.jsx
│
├── components/
│   └── Sidebar.jsx
│
└── styles/
    └── theme.css

APP.JSX :

import React, { useState } from "react";
import Home from "./pages/Home";
import Prediction from "./pages/Prediction";
import Sidebar from "./components/Sidebar";
import "./styles/theme.css";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app-container">

      {/* SIDEBAR */}
      <Sidebar setPage={setPage} />

      {/* MAIN PAGE AREA */}
      <div className="main-content">
        {page === "home" && <Home />}
        {page === "prediction" && <Prediction />}
      </div>

    </div>
  );
}


SIDE BAR COMPONENTS :

import React from "react";

export default function Sidebar({ setPage }) {
  return (
    <div className="sidebar">

      <h2 className="logo">Rhizosense</h2>

      <button onClick={() => setPage("home")}>
        Home
      </button>

      <button onClick={() => setPage("prediction")}>
        Prediction
      </button>

    </div>
  );
}


HOME PAGE :

import React from "react";

export default function Home() {
  return (
    <div className="page">

      <h1>🌱 Rhizosense</h1>

      <p>
        Rhizosphere Activity Prediction System (RAPS) is a smart agriculture decision support tool
        for analyzing soil biology, root health, and plant stress.
      </p>

      <div className="card">
        <h3>System Highlights</h3>
        <ul>
          <li>Soil enzyme analysis</li>
          <li>Root health evaluation</li>
          <li>Stress prediction</li>
          <li>AI-based recommendations</li>
        </ul>
      </div>

    </div>
  );
}


PREDICTION PAGE :

import React, { useState } from "react";

export default function Prediction() {

  const [data, setData] = useState({
    dha: "", ur: "", pho: "", cat: "",
    sod: "", spad: "", rl: "", rb: ""
  });

  const [result, setResult] = useState(null);

  const score = (v, a, b, c) => {
    v = Number(v);
    if (v < a) return 1;
    if (v < b) return 2;
    if (v < c) return 3;
    return 4;
  };

  const calculate = () => {

    const s = {
      dha: score(data.dha, 25, 35, 45),
      ur: score(data.ur, 40, 55, 70),
      pho: score(data.pho, 55, 75, 95),
      cat: score(data.cat, 0.55, 0.75, 0.95),
      sod: score(data.sod, 30, 40, 55),
      spad: score(data.spad, 35, 40, 46),
      rl: score(data.rl, 75, 95, 115),
      rb: score(data.rb, 20, 35, 50)
    };

    const RHI = ((s.dha + s.ur + s.pho + s.rl + s.rb) / 20) * 100;
    const SRI = ((s.cat + s.sod + s.spad) / 12) * 100;
    const RFI = ((s.rl + s.rb) / 8) * 100;

    setResult({ s, RHI, SRI, RFI });
  };

  return (
    <div className="page">

      <h1>📊 Prediction System</h1>

      {/* INPUT FORM */}
      <div className="card">

        {Object.keys(data).map((key) => (
          <input
            key={key}
            placeholder={key.toUpperCase()}
            onChange={(e) =>
              setData({ ...data, [key]: e.target.value })
            }
          />
        ))}

        <button onClick={calculate}>
          Analyze
        </button>

      </div>

      {/* OUTPUT */}
      {result && (
        <div className="card">

          <h3>Results</h3>

          <p>RHI: {result.RHI.toFixed(2)}%</p>
          <p>SRI: {result.SRI.toFixed(2)}%</p>
          <p>RFI: {result.RFI.toFixed(2)}%</p>

          <div className="insight">
            {result.RHI > 70
              ? "Healthy rhizosphere"
              : "Needs soil improvement"}
          </div>

        </div>
      )}

    </div>
  );
}


THEME.CSS :

body {
  margin: 0;
  font-family: Arial;
  background: linear-gradient(#0b3d2e, #1b5e20);
  color: white;
}

/* APP LAYOUT */
.app-container {
  display: flex;
  height: 100vh;
}

/* SIDEBAR */
.sidebar {
  width: 220px;
  background: #0a2f1f;
  padding: 20px;
}

.sidebar button {
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  background: #2e7d32;
  color: white;
  border: none;
  cursor: pointer;
}

/* MAIN */
.main-content {
  flex: 1;
  padding: 20px;
}

/* CARD */
.card {
  background: rgba(255,255,255,0.1);
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
}

input {
  width: 100%;
  margin: 5px 0;
  padding: 10px;
  border: none;
}

/* BUTTON */
button {
  background: #2e7d32;
  color: white;
  padding: 10px;
  width: 100%;
  border: none;
  margin-top: 10px;
}   
