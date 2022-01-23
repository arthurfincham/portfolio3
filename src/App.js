import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as Pages from './pages/pagesExporter';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Pages.About />} />
          <Route path="/projects" element={<Pages.Projects />} />
          <Route path="/CV" element={<Pages.CV />} />
          <Route path="/contact" element={<Pages.Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
