import React from "react";
import { useSpring, animated } from "react-spring";

const Particle = ({ distance, angle, children }) => {
  const convertDegreesToRadians = (angle) => (angle * Math.PI) / 180;

  const angleInRads = convertDegreesToRadians(angle);

  const x = Math.cos(angleInRads) * distance;
  const y = Math.sin(angleInRads) * distance;

  const style = useSpring({
    
    left:`${x}px`,
    from: {
      left:`0px`,
    },
    config: {
      tension: 190,
      friction: 10,
    },
  });

  return <animated.div style={style}>{children}</animated.div>;
};

export default Particle;
