import React, { useState } from "react";

interface Props {
  addAnswer: (song: string) => void;
}

const Form = (props: Props): JSX.Element => {
  const [song, setSong] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    console.log(e.target.value);
    setSong(e.target.value);
  }

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    props.addAnswer(song);
    setSong("");
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="flex w-full border custom-border-color-unselected ">
        {/* {iconSVG.magnifying} */}
        <input
          className="bg-custom-bg"
          value={song}
          onChange={handleChange}
        ></input>
        <div className="relative right-3 top-4">
          {/* {iconSVG.magnifying} */}
        </div>
      </div>
      <div className="flex justify-between pt-3">
        <button
          type="submit"
          value="Submit"
          className="flex-none px-2 py-2 tracking-widest font-bold text-sm skip-bg"
        >
          SKIP! (+4s)
        </button>

        <button
          type="submit"
          value="Submit"
          className=" flex-none px-2 py-2 tracking-widest font-bold text-sm submit-bg"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default Form;

// <input
//   className="w-full border-none bg-transparent py-3 pr-3 pl-9 "
//
//   type="text"
//   name="name"
//   placeholder="Know it? Search for the artist/title"
// />
