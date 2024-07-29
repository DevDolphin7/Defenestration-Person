import startImage from "../assets/Start.png";
import winImage from "../assets/Win.png";
import worriedImage from "../assets/Worried.png";
import loseImage from "../assets/Start.png";

const imageLookup = {
  startImage,
  winImage,
  worriedImage,
  loseImage,
};

const StatusImage = (props) => {
  const { image } = props;
  return <img src={imageLookup[image]} height="374" width="644" />;
};

export default StatusImage;
