import userEvent from '@testing-library/user-event';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk'
import { SignIn } from './components/SignInPage/SignIn'

window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener: function () { },
    removeListener: function () { }
  };
};

const mockInitialStateAuth = {
  userData: {},
  isAuth: false,
  errors: []
}

const mockReducerAuth = (state = mockInitialStateAuth) => state;

const store = createStore(combineReducers({
  login: mockReducerAuth,
}), composeWithDevTools(applyMiddleware(thunk)))

describe('SignIn page', () => {
  let component;
  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <Provider store={store}>
          <SignIn />
        </Provider>
      </BrowserRouter>,
    );
  });

  afterEach(cleanup);

  it('Should render the page title and form fields', () => {
    expect(screen.getByText('Welcome to movies catalog!')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
  });

  it('onChange username input', () => {
    const { getByTestId } = component;
    const inputName = getByTestId('username');
    expect(inputName.value).toBeFalsy();
    userEvent.type(inputName, 'NewUser')
    expect(inputName.value).toBe('NewUser');
  })

  it('onChange password input', () => {
    const { getByTestId } = component;
    const inputPass = getByTestId('password');
    expect(inputPass.value).toBeFalsy();
    userEvent.type(inputPass, 'NewPassword')
    expect(inputPass.value).toBe('NewPassword');
  })

  it('Should render alert', async () => {
    const { getByTestId } = component;
    const inputName = getByTestId('username');
    expect(inputName.value).toBeFalsy();
    userEvent.type(inputName, 'xx')
    const alertText = await screen.findByText("'username' must be at least 3 characters")
    expect(alertText).toBeInTheDocument()
  })
})
