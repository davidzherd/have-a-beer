import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home/Home";
import reportWebVitals from "./reportWebVitals";
import FindABeer from "./pages/FindABeer/FindABeer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ContactUs from "./pages/ContactUs/ContactUs";

export default function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="have-a-beer/" element={<Home />}></Route>
          <Route path="have-a-beer/home" element={<Home />}></Route>
          <Route path="have-a-beer/findabeer" element={<FindABeer />}></Route>
          <Route path="have-a-beer/contact" element={<ContactUs />}></Route>
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
