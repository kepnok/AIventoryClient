// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Button } from "./components/Button";
import { Items } from "./components/Items";
import { PlusIcon } from "./icons/PlusIcon";

function Dashboard() {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "2rem 0" }}>Dashboard</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
        <Link to="/signup">
          <Button size="lg" variant="primary" text="Sign Up" startIcon={<PlusIcon size="lg" />} />
        </Link>
        <Link to="/login">
          <Button size="lg" variant="secondary" text="Log In" startIcon={<PlusIcon size="lg" />} />
        </Link>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <Items productName="Milk" sku="MILK-500ML" quantity={43} restockLevel={10} />
        <Items productName="Water" sku="WATER-1L" quantity={23} restockLevel={30} />
      </div>
    </>
  );
}

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default App;
