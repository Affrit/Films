import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"
import { MoviesPage } from './components/MoviesPage/MoviesPage'
import { SignIn } from './components/SignInPage/SignIn'

window.matchMedia = window.matchMedia || function() {
  return {
      matches : false,
      addListener : function() {},
      removeListener: function() {}
  };
};

describe('SignIn', () => {
  it('render SignIn component', () => {
    render(<SignIn />);
    screen.debug();
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  })
})
