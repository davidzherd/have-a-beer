import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home/Home";
import reportWebVitals from "./reportWebVitals";
import FindABeer from "./pages/FindABeer/FindABeer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="findabeer" element={<FindABeer />}></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
