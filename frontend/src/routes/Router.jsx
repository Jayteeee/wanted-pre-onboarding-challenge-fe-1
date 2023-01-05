import React, { Suspense, lazy } from "react";
// router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
const Login = lazy(() => import("../components/auth/Login"));
const Signup = lazy(() => import("../components/auth/Signup"));

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/auth" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
