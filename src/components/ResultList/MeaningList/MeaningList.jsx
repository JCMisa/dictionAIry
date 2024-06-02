import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faVolumeHigh,
  faVolumeLow,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useRef, useState } from "react";
import { InputContext } from "../../../App";

const MeaningList = ({ mean }) => {
  const { inputValue } = useContext(InputContext);

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const phoneticsAudio = mean[0].phonetics[2]?.audio;

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 pt-24 pb-2 mx-auto flex flex-wrap flex-col">
          <h3 className="text-2xl font-bold mb-4">Meaning and Definitions:</h3>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-full md:w-full">
              <div className="flex border-2 rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 flex-shrink-0 cursor-pointer">
                  <FontAwesomeIcon
                    icon={isPlaying ? faVolumeHigh : faVolumeLow}
                    className="w-8 h-8"
                    onClick={handleClick}
                  />
                  <audio
                    ref={audioRef}
                    src={phoneticsAudio}
                    onEnded={() => setIsPlaying(false)}
                  ></audio>
                </div>
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-medium mb-3">
                    {inputValue.toUpperCase()}
                  </h2>
                  <div className="leading-relaxed text-base">
                    {mean.map((val) =>
                      val.meanings.map((means) =>
                        means.definitions.map((def, index) => (
                          <div key={index}>
                            <li>{def.definition}</li>
                          </div>
                        ))
                      )
                    )}
                  </div>
                  <a className="mt-3 text-indigo-400 inline-flex items-center cursor-pointer">
                    Learn More
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="w-4 h-4 ml-2"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeaningList;
