import React from 'react';
import AuthenticatedApp from './route/authenticated-app';
import UnauthenticatedApp from './route/unauthenticated-app';
import { useAuth } from './context/authentication';

function App() {
  const auth = useAuth();
  return auth.isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
