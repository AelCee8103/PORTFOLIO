import { ThemeToggle } from "../components/ThemeToggle";
import React from "react";
import "../index.css";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* Nav Bar*/}
      <Navbar />
      {/* main content*/}

      {/* Footer*/}
    </div>
  );
};
