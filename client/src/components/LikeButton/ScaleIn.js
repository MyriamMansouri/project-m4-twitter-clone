import React from "react";
import { useSpring, animated } from "react-spring";

const ScaleIn = ({ children }) => {
  const style = useSpring({
    transform:'scale(1,1)',
    from: {
        transform:'scale(0.6,0.6)',
    },
    config: {
      tension: 190,
      friction: 10,
    },
  });

  return <animated.div style={style}>{children}</animated.div>;
};

export default ScaleIn;
