import React from "react";
import { Hero } from "../hero/Hero";
import { Heading } from "../nav/Heading";

export const Home = () => {
  return (
    <>
      <div className="home">
        <main id="main">
          <Heading />
          <Hero />
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
