import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const RouterContext = createContext({
  path: '/',
  navigate: () => {},
});

export function RouterProvider({ children }) {
  // 获取初始路径，支持 hash 路由和 pathname 路由
  const normalizePath = (value) => {
    if (!value) return '/';
    const trimmed = value.startsWith('/') ? value : `/${value}`;
    const questionIndex = trimmed.indexOf('?');
    if (questionIndex >= 0) {
      const onlyPath = trimmed.slice(0, questionIndex);
      return onlyPath || '/';
    }
    return trimmed || '/';
  };

  const getInitialPath = () => {
    // 优先使用 hash 路由（如果存在）
    if (window.location.hash) {
      const hash = window.location.hash.slice(1); // 移除 # 号
      if (hash) {
        return normalizePath(hash);
      }
    }
    // 对于 file:// 协议或包含 .html 的路径，默认返回 '/'
    const pathname = window.location.pathname;
    const isFileProtocol = window.location.protocol === 'file:';
    if (isFileProtocol || pathname.includes('.html') || pathname === '/' || pathname === '') {
      return '/';
    }
    return normalizePath(pathname);
  };

  const [path, setPath] = useState(getInitialPath);

  useEffect(() => {
    // 初始化时，如果没有 hash，设置默认 hash 为 '/'
    // 使用 history.replaceState 而不是 location.replace，避免页面重新加载
    const currentHash = window.location.hash;
    if (!currentHash || currentHash === '#') {
      // 确保 URL 有 hash，即使是空 hash 也要设置为 '#/'
      window.history.replaceState(null, '', '#/');
      setPath('/');
    } else {
      // 如果已经有 hash，确保 path 状态同步
      const hashPath = getInitialPath();
      setPath(hashPath);
    }

    const handlePopState = () => {
      const newPath = getInitialPath();
      setPath(newPath);
    };

    const handleHashChange = () => {
      const newPath = getInitialPath();
      setPath(newPath);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo(
    () => ({
      path,
      navigate: (to) => {
        if (!to) {
          return;
        }
        const normalized = normalizePath(to);
        if (normalized === path) {
          return;
        }
        // 使用 hash 路由，更兼容静态部署
        window.location.hash = to;
        setPath(normalized);
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
