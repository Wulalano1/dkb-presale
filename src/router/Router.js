import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const RouterContext = createContext({
  path: '/',
  navigate: () => {},
});

export function RouterProvider({ children }) {
  const [path, setPath] = useState(() => window.location.pathname || '/');

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const value = useMemo(
    () => ({
      path,
      navigate: (to) => {
        if (!to || to === path) {
          return;
        }
        window.history.pushState({}, '', to);
        setPath(to);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    }),
    [path]
  );

  return (
    <RouterContext.Provider value={value}>
      {typeof children === 'function' ? children(path) : children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

export function Route({ path, children }) {
  const router = useRouter();
  if (router.path !== path) {
    return null;
  }
  return <>{children}</>;
}

export function Redirect({ to }) {
  const router = useRouter();

  useEffect(() => {
    if (to) {
      router.navigate(to);
    }
  }, [router, to]);

  return null;
}
