import React from 'react';
import './App.scss';
import Index from './pages/Index';
import useFirebaseAuth from 'hooks/useFirebaseAuth';

const App: React.FC<{}> = () => {
  useFirebaseAuth();
  return (
    <Index />
  );
}

export default App;
