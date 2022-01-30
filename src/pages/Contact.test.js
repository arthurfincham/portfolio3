import React from 'react';
import Contact from './Contact';
import { render, screen } from '@testing-library/react';

describe('CONTACT', () => {
  describe('contact form', () => {
    test('form renders', () => {
      render(<Contact />);
      expect(screen.getByTestId('contactForm')).toBeInTheDocument();
    });
  });
});
