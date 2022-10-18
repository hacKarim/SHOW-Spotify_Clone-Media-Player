import { useLottie } from "lottie-react";
import logoAnimated from "./logoAnimated.json";

const Logo = () => {
  const options = {
    animationData: logoAnimated,
    loop: false,
    speed: 0.5,
  };

  const { View } = useLottie(options, { width: "200px", height: "200px" });

  return <>{View}</>;
};

export default Logo;
