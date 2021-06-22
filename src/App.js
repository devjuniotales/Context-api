
import React from 'react'

import ThemeProvider from './context/theme'
import AuthProvidoer from './context/Auth';
import Routes from './routes';

function App() {
  return (
    <AuthProvidoer>
      <ThemeProvider >
        <Routes/>
      </ThemeProvider>
    </AuthProvidoer>
   
  );
}

export default App;
