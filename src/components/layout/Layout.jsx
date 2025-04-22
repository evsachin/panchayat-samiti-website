import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main className="p-0">
        <Outlet /> {/* Renders the routed page inside this */}
      </main>
    </div>
  );
}
