import React from "react";
import { Hero } from "./hero/Hero";
import { Heading } from "../nav/Heading";
import { Sidebar } from "../nav/Sidebar";
import { About } from "./about/About";
import { Contact } from "./contact/Contact";

export const Home = () => {
  return (
    <>
      <div className="grid grid-cols-[60px_1fr]">
        <Sidebar />
        <main id="main">
          <Heading />
          <Hero />
          <About />
          <Contact />
          <div
            style={{
              height: "200px",
              background:
                "linear-gradient(180deg, var(--background), var(--background-dark))",
            }}
          />
        </main>
      </div>
    </>
  );
};
