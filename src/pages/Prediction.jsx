import React, { useState } from "react";
 
export default function Prediction() {
 
const [data, setData] = useState({ dha: "", ur: "", pho: "", cat: "", sod: "", spad: "", rl: "", rb: "" });
 
const [result, setResult] = useState(null);
 
const score = (v, a, b, c) => { v = Number(v); if (v < a) return 1; if (v < b) return 2; if (v < c) return 3; return 4; };
 
const calculate = () => {
 `const s = {     dha: score(data.dha, 25, 35, 45),     ur: score(data.ur, 40, 55, 70),     pho: score(data.pho, 55, 75, 95),     cat: score(data.cat, 0.55, 0.75, 0.95),     sod: score(data.sod, 30, 40, 55),     spad: score(data.spad, 35, 40, 46),     rl: score(data.rl, 75, 95, 115),     rb: score(data.rb, 20, 35, 50)   };    const RHI = ((s.dha + s.ur + s.pho + s.rl + s.rb) / 20) * 100;   const SRI = ((s.cat + s.sod + s.spad) / 12) * 100;   const RFI = ((s.rl + s.rb) / 8) * 100;    setResult({ s, RHI, SRI, RFI });   ` 
};
 
return ( 
 `  <h1>📊 Prediction System</h1>      {/* INPUT FORM */}     <div className="card">        {Object.keys(data).map((key) => (         <input           key={key}           placeholder={key.toUpperCase()}           onChange={(e) =>             setData({ ...data, [key]: e.target.value })           }         />       ))}        <button onClick={calculate}>         Analyze       </button>      </div>      {/* OUTPUT */}     {result && (       <div className="card">          <h3>Results</h3>          <p>RHI: {result.RHI.toFixed(2)}%</p>         <p>SRI: {result.SRI.toFixed(2)}%</p>         <p>RFI: {result.RFI.toFixed(2)}%</p>          <div className="insight">           {result.RHI > 70             ? "Healthy rhizosphere"             : "Needs soil improvement"}         </div>        </div>     )}    </div>   ` 
); }
