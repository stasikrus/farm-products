import React from "react";
import AdvantagesList from "../../blocks/advantages-list/advantages-list";
import About from "/src/components/blocks/about/about";

function MainPage({ advantages }) {
  return (
    <>
      <About />
      <AdvantagesList advantages={advantages} />
    </>
  );
}

export default MainPage;
