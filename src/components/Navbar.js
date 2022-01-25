import NavLinks from './NavLinks';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
import PlusIcon from '../svgs/PlusIcon';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isClosed, setIsClosed] = useState(true);

  const config = {
    tension: 210,
    friction: 30,
  };

  const location = useLocation();

  const handleClick = () => {
    setIsClosed(!isClosed);
  };

  const navSpring = useSpring({
    right: isClosed ? window.innerWidth : 0,
  });

  const rotation = isClosed ? 0 : -45;

  const titleSlide = isClosed ? 0 : -120;

  const arrowRotation = useSpring({
    config,
    transform: isClosed ? `rotate(${rotation}deg)` : `rotate(${rotation}deg)`,
  });

  const mobTitleStyles = useSpring({
    config,
    transform: isClosed ? `translate(${titleSlide}px)` : `translate(${titleSlide}px)`,
  });

  const mobNavTitle = (path) => {
    switch (path) {
      case '/projects':
        return 'Projects';
      case '/CV':
        return 'CV';
      case '/contact':
        return 'Contact';
      default:
        return 'About';
    }
  };

  return (
    <nav className="sm:overflow-hidden w-full bg-amber-100 relative h-[50px] fr justify-center shadow-md xxl:px-24">
      <div className="z-40 items-center justify-between w-full px-2 shadow-md sm:shadow-none sm:justify-end fr xxl:mr-2 mainNavWrapper">
        <NavLinks className="relative items-center hidden w-auto mx-4 mt-2 space-x-6 sm:flex" />
        <animated.span style={mobTitleStyles} className="mt-1 ml-3 text-xl sm:hidden font-a1 mobActive">
          {mobNavTitle(location.pathname)}
        </animated.span>
        <div onClick={() => handleClick()} className=" w-[50px] h-[50px] ">
          <animated.div style={arrowRotation} className="w-auto h-full sm:hidden">
            <PlusIcon className="w-auto h-full fill-indigo-600 sm:hidden" />
          </animated.div>
        </div>
      </div>
      <animated.div style={navSpring} className=" navContentMob mobileNavBar absolute top-[50px] w-full  z-10 flex sm:hidden fc justify-start p-4 ">
        <div className="w-full h-[80vh]   ">
          <NavLinks handleClick={handleClick} className="items-start space-y-6 navLinksClassName fc " />
        </div>
      </animated.div>
    </nav>
  );
}
