import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as Pages from './pages/pagesExporter';
import Navbar from './components/Navbar';
import useGoogleAnalytics from './utils/useGoogleAnalytics';
import { useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
  return (
    <Router>
      <GARoutes />
    </Router>
  );
}

export default App;
