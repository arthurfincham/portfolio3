import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('CONTACT', () => {
  describe('contact form', () => {
    test('form renders', () => {
      render(<Contact />);
      expect(screen.getByTestId('contactForm')).toBeInTheDocument();
    });
  });
});
