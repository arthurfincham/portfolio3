import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import * as Pages from './pages/pagesExporter';
import useGoogleAnalytics from './utils/useGoogleAnalytics';

export default function GARoutes() {
  useGoogleAnalytics();

  const location = useLocation();
  return (
    <>
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<Pages.NewAbout />} />
            <Route path="/projects" element={<Pages.Projects />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}
