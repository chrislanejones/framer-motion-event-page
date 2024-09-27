import React from "react";
import { Hero } from "../hero/Hero";
import { Heading } from "../nav/Heading";
import { SideBar } from "../nav/Sidebar";
import { About } from "../about/About";

export const Home = () => {
  return (
    <>
      <div className="home">
        <SideBar />
        <main id="main">
          <Heading />
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
