import React from 'react';
import Home from './pages/Home';
import Presale from './pages/Presale';
import Introduction from './pages/Introduction';
import { RouterProvider, useRouter } from './router/Router';

function AppRoutes() {
  const { path } = useRouter();
  switch (path) {
    case '/presale':
      return <Presale />;
    case '/introduction':
      return <Introduction />;
    case '/home':
    case '/':
    default:
      return <Home />;
  }
}

function App() {
  return (
    <RouterProvider>
      <AppRoutes />
    </RouterProvider>
  );
}

export default App;
