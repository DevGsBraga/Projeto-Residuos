// AnimatedBox.jsx
import  { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

// eslint-disable-next-line react/prop-types
const AnimaBannerPrincipal = ({ children }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <div ref={boxRef}>
      {children}
    </div>
  );
};

export default AnimaBannerPrincipal;
