/* eslint-disable import/no-anonymous-default-export */
import ReactGA from 'react-ga';

const TRACKING_ID = process.env.REACT_APP_GA_TAG;

function init() {
  const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'nodebug';
  ReactGA.initialize(TRACKING_ID, { debug: isDev });
}

function sendEvent(payload) {
  ReactGA.event(payload);
}

function sendPageview(path) {
  ReactGA.set({ page: path });
  ReactGA.pageview(path);
}

export default {
  init,
  sendEvent,
  sendPageview,
};
