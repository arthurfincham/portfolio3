import NavLinks from './NavLinks';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';
import { useState } from 'react';
import PlusIcon from '../svgs/PlusIcon';

export default function Navbar() {
  const [isClosed, setIsClosed] = useState(true);

  const [ref, bounds] = useMeasure();

  const config = {
    tension: 210,
    friction: 30,
  };

  const handleClick = () => {
    setIsClosed(!isClosed);
  };

  const navSpring = useSpring({
    config,
    transform: isClosed ? 'translateX(-100%)' : 'translateX(0)',
  });

  const arrowRotation = useSpring({
    config,
    transform: isClosed ? 'rotate(0deg)' : 'rotate(-45deg))',
  });

  return (
    <nav className="w-full bg-amber-100 relative h-[50px] fr justify-end shadow-lg sm:px-4 ">
      <NavLinks className="items-center hidden w-auto mx-4 mt-2 space-x-6 sm:flex " />
      <div onClick={() => handleClick()} className="z-10 mr-4 hover:cursor-pointer">
        <animated.div style={arrowRotation} className="w-auto h-full sm:hidden">
          <PlusIcon className="w-auto h-full sm:hidden stroke-black" />
        </animated.div>
      </div>
      <animated.div
        style={navSpring}
        className="bg-amber-100 mobileNavBar absolute top-[50px] w-full z-20  h-[50px] flex sm:hidden fr justify-start p-4 "
      >
        <div ref={ref} className="bg-amber-100 h-[950px] z-20 w-full">
          <NavLinks className="items-start space-y-6 fc "></NavLinks>
        </div>
      </animated.div>
    </nav>
  );
}
