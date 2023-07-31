import { ReactElement, useContext } from 'react';
import { RouterContext } from 'router/Router';

interface RoutesProps {
  children: ReactElement[];
}

const Routes = ({ children }: RoutesProps) => {
  const { path, setPath } = useContext(RouterContext);

  window.onpopstate = () => setPath(window.location.pathname);

  for (const { props } of children) {
    if (path === props.path) {
      return props.component;
    }
  }
  return null;
};

export default Routes;
