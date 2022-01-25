import About from './About';
import { render, screen, fireEvent, createEvent } from '@testing-library/react';

describe('About text renders', () => {
  test('Gust', () => {
    render(<About />);
    expect(screen.getByText('arthur fincham')).toBeInTheDocument();
  });
});

describe('About links are correct', () => {
  test('LinkedIn', () => {
    render(<About />);
    expect(screen.getByTestId('arthurLinkedInLink')).toHaveAttribute('href', 'https://www.linkedin.com/in/arthurfincham/');
  });

  test('GitHub', () => {
    render(<About />);
    expect(screen.getByTestId('arthurGitHubLink')).toHaveAttribute('href', 'https://github.com/arthurfincham');
  });
});
