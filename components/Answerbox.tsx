import React, { useState, useEffect } from "react";
import iconSVG from "../pages/SVGs/index";
import { text } from "stream/consumers";

import styles from "../styles/Home.module.css";

interface Answer {
  id: number;
  key: number;
  song: string;
  tryNumber: number;
}

interface AnswerProps {}

const Answerbox = (commonProps: Answer) => {
  const { id, song, tryNumber } = commonProps;

  if (id === tryNumber) {
    console.log("Logging key " + id);
  }

  function Text() {
    if (song.localeCompare("SKIPPED") === 0) {
      return (
        <div className="flex">
          <div className="mr-2">{iconSVG.skipbox}</div>
          <div className="text-custom-mg tracking-widest font-semibold indent-1">
            <div className="text-unselected">SKIPPED</div>
          </div>
        </div>
      );
    } else if (song.length !== 0) {
      return (
        <div className="flex">
          <div className="mr-2">{iconSVG.cross}</div>
          <div className="text-sm">{song}</div>
        </div>
      );
    } else {
      return (
        <div className={"w-5 h-5"}>
          {/* ${id === tryNumber ? `HELLO2` : `HELLO`} */}
        </div>
      );
    }
  }
  return (
    <div
      className={`p-2 mb-2 border   ${
        id === tryNumber
          ? `custom-border-color-selected`
          : `custom-border-color-unselected`
      } `}
    >
      <Text />
    </div>
  );
};

export default Answerbox;
