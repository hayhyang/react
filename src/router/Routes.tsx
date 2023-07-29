import { ReactNode, useContext } from 'react';
import { RouterContext } from '@router/Router';

interface RoutesProps {
  children: ReactNode | ReactNode[];
}

const Routes = ({ children }: RoutesProps) => {
  const { path, setPath } = useContext(RouterContext);

  window.onpopstate = () => setPath(window.location.pathname);

  for (const route of children) {
    if (path === route.props.path) {
      return route.props.component;
    }
  }

  return null;
};

export default Routes;
