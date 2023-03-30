import React, { useState, useEffect } from "react";
import "./Login";

import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./home";
import Account from "./Account";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
