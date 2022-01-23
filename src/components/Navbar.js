import NavLinks from './NavLinks';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';
import { useState } from 'react';

export default function Navbar() {
  const [isClosed, setIsClosed] = useState(true);

  const [ref, bounds] = useMeasure();

  const config = {
    tension: 210,
    friction: 20,
  };

  const navSpring = useSpring({
    config,
    duration: 100,
    height: isClosed ? 0 : bounds.height,
    opacity: isClosed ? 0 : 1,
  });

  return (
    <nav className="w-full bg-amber-100 relative h-[50px] fr justify-end shadow-lg sm:px-4 overflow-hidden">
      <NavLinks className="items-center hidden w-auto mx-4 mt-2 space-x-6 sm:flex " />
      <button onClick={() => setIsClosed(!isClosed)} className="block mx-4 sm:hidden">
        BUTTON
      </button>
      <animated.div style={navSpring} className="absolute top-[60px] w-full bg-slate-300 h-[250px] flex sm:hidden fr justify-start p-4">
        <div ref={ref} className="h-[250px] w-full">
          <NavLinks className="items-start space-y-6 fc"></NavLinks>
        </div>
      </animated.div>
    </nav>
  );
}
