import React from 'react';
import Home from './pages/Home';
import Presale from './pages/Presale';
import Introduction from './pages/Introduction';
import { RouterProvider, useRouter } from './router/Router';
import { I18nProvider } from './i18n/I18nProvider';

function AppRoutes() {
  const { path } = useRouter();
  // 确保 path 始终是有效的字符串
  const normalizedPath = path || '/';
  
  switch (normalizedPath) {
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
    <I18nProvider>
      <RouterProvider>
        <AppRoutes />
      </RouterProvider>
    </I18nProvider>
  );
}

export default App;
