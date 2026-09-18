"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import CareerTab from "@/components/CareerTab";
import HobbyTab from "@/components/HobbyTab";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"career" | "hobby">("career");

  return (
    <main className="min-h-screen bg-[#08090c] text-white flex flex-col selection:bg-white selection:text-black">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area with generous whitespace */}
      <div className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 pt-32 sm:pt-40 pb-24">
        <AnimatePresence mode="wait">
          {activeTab === "career" ? (
            <CareerTab
              key="career"
              onSwitchToHobby={() => {
                setActiveTab("hobby");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          ) : (
            <HobbyTab
              key="hobby"
              onSwitchToCareer={() => {
                setActiveTab("career");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </main>
  );
}
