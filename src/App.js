import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as Pages from './pages/pagesExporter';
import { animated } from 'react-spring';

import Navbar from './components/Navbar';
import useGoogleAnalytics from './utils/useGoogleAnalytics';
import { useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Animation from './animation/Animation';
import { useState } from 'react';
import { useSpring } from 'react-spring';
import { TailSpin } from 'react-loader-spinner';

function GARoutes() {
  useGoogleAnalytics();

  const location = useLocation();
  return (
    <>
      <Navbar />
      <main>
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Routes location={location}>
              <Route path="/" element={<Pages.About />} />
              <Route path="/projects" element={<Pages.Projects />} />
              <Route path="/CV" element={<Pages.CV />} />
              <Route path="/contact" element={<Pages.Contact />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [entered, setEntered] = useState(true);
  const [spinning, setSpinning] = useState(true);

  const divStyle = () => {
    if (loading || spinning) {
      return {
        opacity: 0,
      };
    } else {
      return {
        opacity: 1,
      };
    }
  };

  const spin = () => {
    setTimeout(function () {
      setSpinning(false);
    }, 1500);
  };

  spin();

  const spinStyle = () => {
    if (loading || spinning) {
      return {
        display: 'flex',
      };
    } else {
      return {
        display: 'none',
      };
    }
  };

  const textStyle = useSpring({
    delay: 2000,
    to: 0.45,
    from: {
      opacity: 0,
    },
  });

  return (
    <>
      {entered && (
        <>
          <animated.div style={spinStyle()} className="w-full h-[100vh] fcc">
            <TailSpin color="#4F47E6" height={80} width={80} />
          </animated.div>
          <animated.div style={divStyle()} className="relative">
            <animated.button
              style={textStyle}
              id="mobileEnterButton"
              className="fixed z-20 py-3 px-4 rounded-lg bottom-20 left-[50%] enterButton border border-gray-900 text-2xl tracking-wide font-a2 text-gray-900 sm:hidden"
            >
              enter
            </animated.button>
            <Animation setLoading={setLoading} setEntered={setEntered} textStyle={textStyle} />
          </animated.div>
        </>
      )}
      {!entered && (
        <Router>
          <GARoutes />
        </Router>
      )}
    </>
  );
}

export default App;
