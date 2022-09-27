// /* eslint-disable */
import React, { useState } from "react";

import Answerbox from "./components/Answerbox";
import iconSVG from "./components/SVGs/index";

import "./App.css";
import Form from "./components/Form";
import Endbanner from "./components/Endbanner";

const CORRECT_ANSWER = "Heanna Sumire - Mitero! / みてろ！";

interface IAnswers {
  key: number;
  song: string;
  answered: boolean;
}

const App: React.FunctionComponent = () => {
  const [answers, setAnswers] = useState<IAnswers[]>([
    { key: 0, song: "", answered: false },
    { key: 1, song: "", answered: false },
    { key: 2, song: "", answered: false },
    { key: 3, song: "", answered: false },
    { key: 4, song: "", answered: false },
    { key: 5, song: "", answered: false },
  ]);
  // eslint-disable-next-line
  const [tryNumber, setTryNumber] = useState(0);
  const [correct, setCorrect] = useState(false);

  const answerList = answers.map((ans) => (
    <Answerbox
      id={ans.key}
      key={ans.key}
      song={ans.song}
      answered={ans.answered}
      tryNumber={tryNumber}
    />
  ));

  // change to modify the trynumber
  function addAnswer(song: string): void {
    if (tryNumber === 6) {
      return;
    }

    const newState = answers;

    newState[tryNumber].song = song;
    newState[tryNumber].answered = true;

    if (song.localeCompare(CORRECT_ANSWER) === 0) setCorrect(true);

    setTryNumber(tryNumber + 1);
    setAnswers(newState);
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
          {tryNumber === 6 || correct ? Endbanner() : answerList}
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
