/** @format */

import React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/navigation/ProtectedRoute.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import Comercial from "./views/admin/signupForms/Comercial.jsx";
import SignUpLayout from "./views/admin/signupForms/SignupLayout.jsx";
import Supervisor from "./views/admin/signupForms/Supervisor.jsx";
import Signin from "./views/auth/Signin.jsx";
import Administrateur from "./views/admin/signupForms/Administrateur.jsx";
import Client from "./views/admin/signupForms/Client.jsx";
import Dashboard from './views/admin/Dashboard.jsx';
import Cca from "./views/admin/signupForms/cca.jsx"

const isAuthenticated = true;
const userRole = "admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/dashboard" replace /> : <Signin />
          }
        />
        <Route
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AdminLayout />
            </ProtectedRoute>
          }>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="adduser" element={<SignUpLayout />}>
            <Route index element={<Navigate to="admin" replace />} />
            <Route path="admin" element={<Administrateur />} />
            <Route path="Commercial" element={<Comercial />} />
            <Route path="superviseur" element={<Supervisor />} />
            <Route path="teleconseiller" element={<Cca />} />
            <Route path="client" element={<Client/>} />
          </Route>
          <Route path="calendar" element={<Dashboard />} />
          <Route path="profile" element={<Dashboard />} />
          <Route path="manageusers" element={<Dashboard />} />
          <Route path="manageproducts" element={<Dashboard />} />
          <Route path="prospectsdata" element={<Dashboard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
