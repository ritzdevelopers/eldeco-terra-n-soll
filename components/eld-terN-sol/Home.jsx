import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";
import FloatingQueryTab from "./FloatingQueryTab";
import Header from "./Header";
import SmoothScroll from "./SmoothScroll";

/*
  Eldeco Terra & Sol landing page.
  Sections follow the vertical order of the Figma frame
  (file to28JffFfMbVRJHdRR4C0i, node 1:3 "Desktop - 1", 1440x7035):

    1  Hero + navigation + highlight strip      y    0 -  775
    2  Overview                                 y  775 - 1728
    3  Key Highlights                           y 1728 - 2472
    4  Modern Amenities                         y 2472 - 3346
    5  Our Price                                y 3346 - 3928
    6  Gallery                                  y 3928 - 4686
    7  Location                                 y 4686 - 5225
    8  Virtual Site Tour                        y 5090 - 5803
    9  About Developer + call-back form         y 5863 - 6535
    10 Footer                                   y 6535 - 7035
*/

const Home = () => {
  return (
    <div>
      <Header />
      <SmoothScroll>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
      </SmoothScroll>
      <FloatingQueryTab />
    </div>
  );
};

export default Home;
