import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import { Crew, Destination, HomePage, Technology } from "./pages";
import Header from "./components/Header";

function App() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 590px)");
    function handleScreenChange() {
      setIsLargeScreen(mediaQuery.matches);
    }
    handleScreenChange();
    mediaQuery.addEventListener("change", handleScreenChange);

    return () => mediaQuery.removeEventListener("change", handleScreenChange);
  }, []);
  return (
    <div className="">
      {/* <Header isLargeScreen={isLargeScreen} /> */}
      <Routes>
        <Route path="/" element={<HomePage isLargeScreen={isLargeScreen} />} />
        <Route
          path="destination"
          element={<Destination isLargeScreen={isLargeScreen} />}
        />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
