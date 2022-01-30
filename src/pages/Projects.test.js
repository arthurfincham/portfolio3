import React from 'react';

import { render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('PROJECTS', () => {
  describe('link buttons have correct href', () => {
    test('Gust', () => {
      render(<Projects />);
      expect(screen.getByTestId('Gust-GitHubLink')).toHaveAttribute(
        'href',
        'https://github.com/arthurfincham/gust',
      );
      expect(screen.getByTestId('Gust-LiveSiteLink')).toHaveAttribute(
        'href',
        'https://gust-six.vercel.app/',
      );
    });

    test('Font App', () => {
      render(<Projects />);
      expect(screen.getByTestId('Font App-GitHubLink')).toHaveAttribute(
        'href',
        'https://github.com/arthurfincham/font-app',
      );
      expect(screen.getByTestId('Font App-LiveSiteLink')).toHaveAttribute(
        'href',
        'https://font-app.vercel.app/',
      );
    });

    test('Newsforce', () => {
      render(<Projects />);
      expect(screen.getByTestId('Newsforce-GitHubLink')).toHaveAttribute(
        'href',
        'https://github.com/newsforce/newsforce-front-end-react',
      );
    });

    test('Acebook', () => {
      render(<Projects />);
      expect(screen.getByTestId('Acebook-GitHubLink')).toHaveAttribute(
        'href',
        'https://github.com/arthurfincham/acebook',
      );
    });

    test('Chitter', () => {
      render(<Projects />);
      expect(screen.getByTestId('Chitter-GitHubLink')).toHaveAttribute(
        'href',
        'https://github.com/arthurfincham/chitter-challenge',
      );
      expect(screen.getByTestId('Chitter-LiveSiteLink')).toHaveAttribute(
        'href',
        'https://chitter-af.herokuapp.com/',
      );
    });

    test('Countries Quiz', () => {
      render(<Projects />);
      expect(screen.getByTestId('Countries-GitHubLink')).toHaveAttribute(
        'href',
        'https://github.com/arthurfincham/countries-of-the-world',
      );
      expect(screen.getByTestId('Countries-LiveSiteLink')).toHaveAttribute(
        'href',
        'https://countries-of-the-world-gules.vercel.app/',
      );
    });

    test('Dev Licence', () => {
      render(<Projects />);
      expect(screen.getByTestId('Dev Licence-GitHubLink')).toHaveAttribute(
        'href',
        'https://github.com/arthurfincham/github-frontend-api',
      );
      expect(screen.getByTestId('Dev Licence-LiveSiteLink')).toHaveAttribute(
        'href',
        'https://git-card.herokuapp.com/',
      );
    });
  });
});
