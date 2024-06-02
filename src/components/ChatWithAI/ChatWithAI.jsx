import TextChat from "../AIAssistance/TextChat";
import Sidebar from "../AIAssistanceSideBar/Sidebar";
import Header from "../Header/Header";

const ChatWithAI = () => {
  return (
    <>
      <div className="px-20">
        <Header />
      </div>
      <TextChat />
      <Sidebar />
    </>
  );
};

export default ChatWithAI;
