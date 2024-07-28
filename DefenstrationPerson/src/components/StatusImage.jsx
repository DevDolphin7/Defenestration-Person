// Make somne html that displays the image

const StatusImage = (props) => {
  const { image } = props;
  return <img src={image} height="374" width="644" />;
};

export default StatusImage;
