import React, { useState } from "react"; import Home from "./pages/Home"; import Prediction from "./pages/Prediction"; import Sidebar from "./components/Sidebar"; import "./styles/theme.css";
 
export default function App() { const [page, setPage] = useState("home");
 
return ( 
 `  {/* SIDEBAR */}     <Sidebar setPage={setPage} />      {/* MAIN PAGE AREA */}     <div className="main-content">       {page === "home" && <Home />}       {page === "prediction" && <Prediction />}     </div>    </div>   ` 
); }
