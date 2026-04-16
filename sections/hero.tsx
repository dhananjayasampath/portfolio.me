"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full text-white overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-no-repeat bg-center bg-[length:80%]" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-10 flex items-center justify-between">

        {/* LEFT SIDE */}
        <div className="max-w-2xl">

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-400 mb-4"
          >
            Hi there, it's me
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[80px] leading-[0.9] font-extrabold tracking-tight"
          >
            DHANANJAYA <br /> SAMPATH
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-semibold text-red-500 mt-6"
          >
            AI/ML ENGINEER
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 mt-6 max-w-md"
          >
            Passionate about building intelligent systems, scalable applications,
            and modern digital experiences.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full"
          >
            View Projects
          </motion.button>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute right-10 bottom-0"
        >

        </motion.div>

      </div>
    </section>
  );
}