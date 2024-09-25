import React from "react";
import { About } from "../about/About";

export const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1">
        <main id="main">
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
