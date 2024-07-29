const DisplayCorrectLetters = (props) => {
  const { correctLetters, correctWordLetters } = props;

  const letterClasses = correctWordLetters.map((letter) =>
    correctLetters.includes(letter) ? "showLetter" : "hiddenLetter"
  );

  return (
    <ul className="displayLetters">
      {correctWordLetters.map((letter, index) => (
        <li key={index} className={letterClasses[index]}>
          {letter}
        </li>
      ))}
    </ul>
  );
};

export default DisplayCorrectLetters;
