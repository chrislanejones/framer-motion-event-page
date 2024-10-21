import React from "react";
import { Hero } from "./hero/Hero";
import { Sidebar } from "../nav/Sidebar";
import { Contact } from "./contact/Contact";

import { Info } from "./info/Info";
import Speakers from "./speakers/Speakers";
import { Heading } from "../nav/Heading";
import { Time } from "./about/Time";

export const Home = () => {
  return (
    <>
      <div className="grid grid-cols-[60px_1fr]">
        <Sidebar />
        <main id="main">
          <Heading />
          <Hero />
          <Speakers />
          <Time />
          <Info />
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
