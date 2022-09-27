// /* eslint-disable */
import React, { useState } from "react";

import Answerbox from "./components/Answerbox";
import iconSVG from "./components/SVGs/index";

import "./App.css";
import Form from "./components/Form";

// const answers = [
//   { key: 0, song: "SKIPPED" },
//   { key: 1, song: "Minami Kotori - Spicaterrible / スピカテリブル" },
//   { key: 2, song: "SKIPPED" },
//   { key: 3, song: "SKIPPED" },
//   { key: 4, song: "" },
//   { key: 5, song: "" },
// ];

interface IAnswers {
  key: number;
  song: string;
}

const App: React.FunctionComponent = () => {
  const [answers, setAnswers] = useState<IAnswers[]>([]);
  // eslint-disable-next-line
  const [tryNumber, setTryNum] = useState(5);

  const answerList = answers.map((ans) => (
    <Answerbox
      id={ans.key}
      key={ans.key}
      song={ans.song}
      tryNumber={tryNumber}
    />
  ));

  function addAnswer(song: string): void {
    setAnswers((prevState) => [...prevState, { key: answers.length, song }]);
  }

  return (
    <>
      <main style={{ height: "100vh" }} className="bg-custom-bg flex flex-col">
        <div className="border-b custom-border-color-selected">
          <div className="max-w-3xl mx-auto">
            <header className="flex justify-evenly text-custom-fgcolor p-3 items-center ">
              <div className="flex-1 ">
                <div className="flex flex1 items-end justify-start shrink">
                  <div className="p-2 ">{iconSVG.about}</div>
                  <div className="p-2">{iconSVG.heart}</div>
                </div>
              </div>
              <div className="flex-1 ">
                <h1 className="font-serif text-3xl font-bold text-center flex-grow">
                  LoveLive! Heardle
                </h1>
              </div>
              <div className="flex flex-1 justify-end">
                <div className="p-2">{iconSVG.stats}</div>
                <div className="p-2">{iconSVG.question}</div>
              </div>
            </header>
          </div>
        </div>
        <div className="p-3 flex flex-col max-w-screen-sm flex-grow mx-auto w-full">
          {answerList}
        </div>
        <div>Turn up the volume container</div>
        <div className="justify-end">Progress bar Container</div>
        <div>Play button Container</div>
        <div className="m-auto max-w-screen-sm w-full ">
          <div className="mx-3 mb-3">
            <Form addAnswer={addAnswer} />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
