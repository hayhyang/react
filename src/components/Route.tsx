import { ReactNode, useContext } from 'react';
import { RouterContext } from '@components/Router';

interface RouteProps {
  path: string;
  component: ReactNode;
}

const Route = ({ path, component }: RouteProps) => {
  const { path: currentPath, setPath } = useContext(RouterContext);

  window.onpopstate = () => setPath(window.location.pathname);

  if (currentPath !== path) return null;
  return component;
};

export default Route;
