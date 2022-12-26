import { render, RenderOptions } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import { reducers } from '../redux/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  initialState?: any;
  store?: any;
}

const rootReducer = combineReducers(reducers);

const renderWithRedux = (
  component: React.ReactElement,
  {
    initialState = {},
    store = createStore(rootReducer, initialState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return {
    store,
    ...render(component, { wrapper: Wrapper, ...renderOptions }),
  };
};

export { renderWithRedux };
