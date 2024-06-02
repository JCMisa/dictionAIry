import { useContext, useState } from "react";
import { InputContext } from "../../App";
import "./Hero.css";

const Hero = () => {
  const [value, setValue] = useState("");
  const { inputValue, setInputValue } = useContext(InputContext);

  const handleInputChange = (e) => setValue(e.target.value);

  const handleSubmit = () => {
    setInputValue(value);
    setValue("");
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      setInputValue(value);
      setValue("");
    }
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Diction<span className="ai">AI</span>ry{" "}
            <span className="sam">(Simple and Memorable)</span>
          </h1>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
          <div className="relative sm:mb-0 flex-grow w-full">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-400"
            >
              Search
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              value={value}
              className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Search
          </button>
        </div>
        <div className="flex flex-col text-center w-full mb-12 mt-10">
          {inputValue && (
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Result for:{" "}
              <span className="lg:w-2/3 mx-auto leading-relaxed text-base font-bold">
                {" "}
                {inputValue}{" "}
              </span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
