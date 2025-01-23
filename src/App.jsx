import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Crew, Destination, HomePage, Technology } from "./pages";
import Header from "./components/Header";

function App() {
  return (
    <div className=" p-[24px]">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
