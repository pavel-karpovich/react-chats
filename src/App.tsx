import React from 'react';
import { Provider } from 'react-redux';
import Store from './store/store';
import './App.scss';
import Index from './pages/Index';

const App: React.FC<{}> = () => {
  return (
    <Provider store={Store}>
      <Index />
    </Provider>
  );
}

export default App;
