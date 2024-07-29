import { useState } from "react";
import {getRandomWordLetters} from "../utils/utils"

let incorrectGuessCount = 0;
let gameWon = false;
let buttonClasses = Array(27).fill("activeButton");

const userButtons = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
userButtons.push("Reset");

const UserInput = (props) => {
  const {
    setImage,
    setCorrectLetters,
    correctWordLetters,
    setCorrectWordLetters,
  } = props;

  const [disabledButtons, setDisabledButtons] = useState(Array(26).fill(false));

  const checkButton = (event) => {
    event.preventDefault();
    const input = event.target.innerText;

    // Reset everything if reset button clicked
    const resetGame = () => {
      incorrectGuessCount = 0;
      gameWon = false;
      buttonClasses = Array(27).fill("activeButton");
      setCorrectLetters([]);
      setImage("startImage");
      setDisabledButtons(Array(27).fill(false));
      setCorrectWordLetters(getRandomWordLetters())
    };
    if (input === "Reset") {
      resetGame();
      return;
    }

    // If game has already been won or lost, ignore
    if (gameWon || incorrectGuessCount === 7) {
      return;
    }

    // Check letter and win conditions
    const checkWinCondition = () => {
      setCorrectLetters((currentLetters) => {
        const correctLetters = [...currentLetters, input];
        const noRepeatsCorrectLetters = [...new Set(correctWordLetters)]
        if (correctLetters.length === noRepeatsCorrectLetters.length) {
          gameWon = true;
          setImage("winImage");
        }
        return correctLetters;
      });
    };
    if (correctWordLetters.includes(input)) {
      checkWinCondition();
      if (gameWon) {
        return;
      }
    } else {
      incorrectGuessCount++
    }

    // Check if image needs updating
    if (incorrectGuessCount === 4) {
      setImage("worriedImage");
    } else if (incorrectGuessCount === 6) {
      setImage("loseImage");
      setCorrectLetters(correctWordLetters.join(""));
      return;
    }

    // Disable button when clicked
    setDisabledButtons((buttons) => {
      const disabledButtons = [...buttons];
      disabledButtons[event.target.id] = true;
      buttonClasses[event.target.id] = "inactiveButton";
      return disabledButtons;
    });
  };

  // Return a keyboard of buttons with a reset key
  return (
    <ul className="userButtons">
      {userButtons.map((letter, index) => (
        <button
          key={index}
          id={index}
          className={buttonClasses[index]}
          onClick={checkButton}
          disabled={disabledButtons[index]}
        >
          {letter}
        </button>
      ))}
    </ul>
  );
};

export default UserInput;
