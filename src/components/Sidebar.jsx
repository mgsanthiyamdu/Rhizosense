import React from "react";
 
export default function Sidebar({ setPage }) { return ( 
 `  <h2 className="logo">Rhizosense</h2>      <button onClick={() => setPage("home")}>       Home     </button>      <button onClick={() => setPage("prediction")}>       Prediction     </button>    </div>   ` 
); }
