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
  const [preLoading, setPreLoading] = useState(true);

  const divStyle = () => {
    if (preLoading) {
      return {
        opacity: 0,
      };
    } else {
      return {
        opacity: 1,
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

  document.getElementById('root').style.backgroundColor = loading ? '#1C1F25' : '#FFF4C7';

  return (
    <>
      {loading && (
        <div className="relative">
          <animated.button
            style={textStyle}
            id="mobileEnterButton"
            className="fixed z-20 py-3 px-4 rounded-lg bottom-20 left-[50%] enterButton border border-white text-2xl tracking-wide font-a2 text-white"
          >
            enter
          </animated.button>
          <Animation setLoading={setLoading} setPreLoading={setPreLoading} divStyle={divStyle()} textStyle={textStyle} />
        </div>
      )}
      {!loading && (
        <Router>
          <GARoutes />
        </Router>
      )}
    </>
  );
}

export default App;
