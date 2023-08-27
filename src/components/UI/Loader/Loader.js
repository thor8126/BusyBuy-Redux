// import spinner for show loader style
import { SquareLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{
        margin: "auto",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <SquareLoader color="#7064e5" />
    </div>
  );
};

export default Loader;
