import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import iconSVG from "./SVGs/index";

const Home: NextPage = () => {
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
        <div className="p-3 flex flex-col max-w-screen-sm flex-grow mx-auto w-full"></div>
        <div>Turn up the volume container</div>
        <div className="justify-end">Progress bar Container</div>
        <div>Play button Container</div>
        <div>Autocomplete Container</div>
      </main>
    </>
  );
};

export default Home;
