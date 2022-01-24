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
    right: isClosed ? window.innerWidth : 0,
  });

  const rotation = isClosed ? 0 : -45;

  const arrowRotation = useSpring({
    config,
    transform: isClosed ? `rotate(${rotation}deg)` : `rotate(${rotation}deg)`,
  });

  return (
    <nav className="sm:overflow-hidden w-full bg-amber-100 relative h-[50px] fr justify-center shadow-lg xxl:px-24">
      <div className="justify-end w-full fr xxl:mr-2">
        <NavLinks className="items-center hidden w-auto mx-4 mt-2 space-x-6 sm:flex " />
        <div onClick={() => handleClick()} className="z-10 mr-4 hover:cursor-pointer">
          <animated.div style={arrowRotation} className="w-auto h-full sm:hidden">
            <PlusIcon className="w-auto h-full sm:hidden" />
          </animated.div>
        </div>
      </div>
      <animated.div style={navSpring} className="bg-amber-100 mobileNavBar absolute top-[50px] w-full   flex sm:hidden fc justify-start p-4 ">
        <div ref={ref} className="bg-amber-100 h-[950px] navContentMob w-full ">
          <NavLinks handleClick={handleClick} className="items-start space-y-6 fc " />
        </div>
      </animated.div>
    </nav>
  );
}
