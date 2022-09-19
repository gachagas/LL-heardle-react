import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import iconSVG from "./SVGs/index";

import { useState } from "react";
import Answerbox from "../components/Answerbox";

const answers = [
  { key: 0, song: "SKIPPED" },
  { key: 1, song: "Minami Kotori - Spicaterrible / スピカテリブル" },
  { key: 2, song: "" },
  { key: 3, song: "" },
  { key: 4, song: "" },
  { key: 5, song: "" },
];

const Home: NextPage = () => {
  const [tryNumber, setTryNum] = useState(1);

  const answerList = answers.map((ans) => (
    <Answerbox
      id={ans.key}
      key={ans.key}
      song={ans.song}
      tryNumber={tryNumber}
    />
  ));

  return (
    <>
      <Head>Create Next App</Head>
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
        <form>
          <label>
            Song Name:
            <input type="text" name="name" style={{ color: "#000000" }} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <div>Autocomplete Container</div>
      </main>
    </>
  );
};

export default Home;
