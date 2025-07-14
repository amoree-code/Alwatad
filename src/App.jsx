import React from "react";
import "./app.css";
import Home from "./page/Home";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div className=" bg-gradient-to-r from-stone-900 to-indigo-600 min-h-screen">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
