import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from 'react';

interface RouterProps {
  children: ReactNode;
}

export const RouterContext = createContext({
  path: window.location.pathname,
  setPath: (() => null) as Dispatch<SetStateAction<string>>,
});

const Router = ({ children }: RouterProps) => {
  const [path, setPath] = useState(window.location.pathname);

  const value = useMemo(() => ({ path, setPath }), [path, setPath]);

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
};

export default Router;
