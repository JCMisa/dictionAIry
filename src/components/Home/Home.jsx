import { useState } from "react";
import Footer from "../Footer/Footer";
import GeminiButton from "../GeminiChat/GeminiButton";
import GeminiModal from "../GeminiChat/GeminiModal";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import ResultList from "../ResultList/ResultList";
import TextChat from "../AIAssistance/TextChat";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <>
      <GeminiModal isOpen={isOpen} onClose={handleCloseModal}>
        {/* Modal content */}
        <TextChat />
      </GeminiModal>
      <Header />
      <Hero />
      <ResultList />
      <button onClick={handleOpenModal}>
        <GeminiButton />
      </button>
      <Footer />
    </>
  );
};

export default Home;
