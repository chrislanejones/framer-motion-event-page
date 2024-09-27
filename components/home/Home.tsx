import React from "react";
import { About } from "../about/About";
import { Hero } from "../hero/Hero";

export const Home = () => {
  return (
    <>
      <div className="grid grid-cols-[60px_1fr]">
        <main id="main">
          <Hero />
          <About />
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
