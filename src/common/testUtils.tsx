import { PropsWithChildren } from 'react';
import { combineReducers, Store } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { render, RenderOptions } from '@testing-library/react';
import { reducers, State } from '../redux/store';
import theme from '../ui/styles/theme';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  initialState?: State;
  store?: Store;
}

const rootReducer = combineReducers(reducers);

const renderWithProviders = (
  component: React.ReactElement,
  {
    initialState,
    store = configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>{children}</BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  }
  return {
    store,
    ...render(component, { wrapper: Wrapper, ...renderOptions }),
  };
};

export { renderWithProviders };
