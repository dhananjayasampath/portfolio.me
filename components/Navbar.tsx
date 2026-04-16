"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-transparent"
    >
      {/* LEFT TEXT (no hover) */}
      <p className="text-sm text-[#4F4F4F]">
        Have a nice day!
      </p>

      {/* MIDDLE LINKS (no space between text) */}
      <div className="flex text-sm text-[#4F4F4F] gap-6">
        <a className="nav-link" href="#">Home</a>
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Education</a>
        <a className="nav-link" href="#">Projects</a>
        <a className="nav-link" href="#">Contact</a>
      </div>

      {/* RIGHT BUTTON (orange color) */}
      <a
        href="#"
        className="text-sm text-[#F93A00] underline"
      >
        Download CV
      </a>
    </motion.nav>
  );
}