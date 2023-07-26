import { ReactNode, useContext } from 'react';
import { RouterContext } from '@components/Router';

interface RoutesProps {
  children: ReactNode | ReactNode[];
}

const Routes = ({ children }: RoutesProps) => {
  const { path, setPath } = useContext(RouterContext);

  window.onpopstate = () => setPath(window.location.pathname);
  
  for(const route of children) {
    if(path === route.props.path) {
      console.log("current", route.props.path, route.props.component)
      return route.props.component;
    }
  }

  return null;
  
};

export default Routes;
