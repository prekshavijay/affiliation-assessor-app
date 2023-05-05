import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { createContext, useEffect, useState } from "react";

import ADMIN_ROUTE_MAP from "./routes/adminRouteMap";
import './App.css';

import Authenticate from "./login/Authenticate";
import AdminLogin from "./login/AdminLogin";
import EnterOtp from "./login/EnterOtp";
import AdminSingUp from "./login/AdminSignUp";
import LoginEnterOtp from "./login/LoginEnterOtp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={ADMIN_ROUTE_MAP.auth} element={ <Authenticate /> }>
            <Route path={ADMIN_ROUTE_MAP.loginModule.registerotp} element={ <EnterOtp /> }></Route>
            <Route path={ADMIN_ROUTE_MAP.loginModule.login} element={ <AdminLogin /> }></Route>
            <Route path={ADMIN_ROUTE_MAP.loginModule.signup} element={ <AdminSingUp /> }></Route>
            <Route path={ADMIN_ROUTE_MAP.loginModule.loginotp} element={ <LoginEnterOtp /> }></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
