import About from './About';
import { render, screen } from '@testing-library/react';

describe('ABOUT', () => {
  describe('text renders', () => {
    test('arthur fincham', () => {
      render(<About />);
      expect(screen.getByText('arthur fincham')).toBeInTheDocument();
    });
    test('description', () => {
      render(<About />);
      expect(screen.getByText('full-stack developer')).toBeInTheDocument();
    });
  });

  describe('link buttons have correct href', () => {
    test('LinkedIn', () => {
      render(<About />);
      expect(screen.getByTestId('arthurLinkedInLink')).toHaveAttribute('href', 'https://www.linkedin.com/in/arthurfincham/');
    });

    test('GitHub', () => {
      render(<About />);
      expect(screen.getByTestId('arthurGitHubLink')).toHaveAttribute('href', 'https://github.com/arthurfincham');
    });
  });
});
