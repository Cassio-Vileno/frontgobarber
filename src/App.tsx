import React from 'react';
import SignIn from './pages/SignIn';

import Globalstyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <Globalstyle />
  </>
);

export default App;
