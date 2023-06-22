import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import CharityProfile from "./components/CharityProfile";
import Profile from "./components/Profile";
import Layout from "./components/Layout";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/charity/:ein" element={<CharityProfile />} />
          <Route path="/me" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
