import { useContext } from "react";
import { Context } from "../../context/Context";
import { assets } from "../../assets/assets";
import { InputContext } from "../../App";
import "./Main.css";

const TextChat = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const { userEmail } = useContext(InputContext);

  return (
    <>
      <div className="main">
        <div className="nav"></div>
        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>
                    Hello, {userEmail.slice(0, userEmail.indexOf("@"))}
                  </span>
                </p>
                <p>How can I help you today?</p>
              </div>
              <div className="cards">
                <div className="card">
                  <p>Suggest places to travel for the upcoming summer</p>
                  <img src={assets.compass_icon} alt="" />
                </div>

                <div className="card">
                  <p>Summarize the following book: Harry Potter</p>
                  <img src={assets.bulb_icon} alt="" />
                </div>

                <div className="card">
                  <p>Show some interview questions for data analytics job</p>
                  <img src={assets.message_icon} alt="" />
                </div>

                <div className="card">
                  <p>Generate a .NET code to create simple authentication</p>
                  <img src={assets.code_icon} alt="" />
                </div>
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <img src={assets.main_logo} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}

          <div className="main-bottom">
            <div className="search-box">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Enter a prompt here"
              />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                {input ? (
                  <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                ) : null}
              </div>
            </div>
            <p className="bottom-info">
              This is a gemini clone for data integration on our Integrative
              Programming final project.{" "}
              <span className="bottom-info-link">
                Your privacy and Gemini Apps
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextChat;
