import CV from './CV';
import { render, screen } from '@testing-library/react';
describe('CV', () => {
  describe('link button has correct href', () => {
    test('PDF link', () => {
      render(<CV />);
      expect(screen.getByTestId('cvPDFLink')).toHaveAttribute('href', 'ArthurFincham_CV_2022.pdf');
    });
  });
  describe('text renders', () => {
    test('about me renders', () => {
      render(<CV />);
      expect(screen.getByText('ABOUT ME')).toBeInTheDocument();
    });
    test('education renders', () => {
      render(<CV />);
      expect(screen.getByText('Makers Academy')).toBeInTheDocument();
    });

    test('experience renders', () => {
      render(<CV />);
      expect(screen.getByText('Roger Gracie Academy')).toBeInTheDocument();
    });
  });
});
