/*eslint-disable*/
import React, { ReactElement, useState } from "react";
import SONGS from "../constants/songs";

interface Props {
  addAnswer: (song: string) => void;
}

const suggestions = SONGS; // renaming

const Form = (props: Props): JSX.Element => {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserInput(e.target.value);

    const filter = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setActiveSuggestion(0);
    setFilteredSuggestions(filter.slice(0, 6));
    setShowSuggestions(true);
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    props.addAnswer(userInput);
    setUserInput("");
  };

  const handleSkip = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    props.addAnswer("SKIPPED");
    setUserInput("");
  };

  const onClick = (song: string) => {
    setUserInput(song);
    setShowSuggestions(false);
  };

  const suggestionsList = (): any => {
    let suggestionsListComponent = (
      <ul className="suggestions">
        {filteredSuggestions.map((suggestion) => {
          return (
            <li key={suggestion} onClick={() => onClick(suggestion)}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    );

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        return suggestionsListComponent;
      }
    }
  };

  return (
    <>
      <div className=" w-full border custom-border-color-unselected ">
        <input
          className="bg-custom-bg"
          value={userInput}
          onChange={handleChange}
        ></input>
        {suggestionsList()}
      </div>
      <div className="flex justify-between pt-3">
        <button
          type="submit"
          value="Submit"
          onClick={handleSkip}
          className="flex-none px-2 py-2 tracking-widest font-bold text-sm skip-bg"
        >
          SKIP! (+4s)
        </button>

        <button
          type="submit"
          value="Skip"
          onClick={handleSubmit}
          className=" flex-none px-2 py-2 tracking-widest font-bold text-sm submit-bg"
        >
          SUBMIT
        </button>
      </div>
    </>
  );
};

export default Form;
