import { useState } from "react";
import StatusImage from "./StatusImage";
import DisplayCorrectLetters from "./DisplayCorrectLetters";
import UserInput from "./UserInput";
import { getRandomWordLetters } from "../utils/utils.js";

const MainGame = () => {
  const [image, setImage] = useState("./src/assets/Start.png");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [correctWordLetters, setCorrectWordLetters] = useState(
    getRandomWordLetters()
  );
  
  return (
    <>
      <StatusImage image={image} />
      <DisplayCorrectLetters
        correctLetters={correctLetters}
        correctWordLetters={correctWordLetters}
      />
      <UserInput
        setImage={setImage}
        setCorrectLetters={setCorrectLetters}
        correctWordLetters={correctWordLetters}
        setCorrectWordLetters={setCorrectWordLetters}
      />
    </>
  );
};

export default MainGame;
