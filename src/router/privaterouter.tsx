import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component, ...rest}: any) => {
  const renderFn = (Component: any) => (props: any) => {
    if (localStorage.getItem("auth")) {
      return <Component {...props} />;
    } else {
      return <Redirect to={{ pathname:"/login" }}/>;
    }
  };
    return <Route {...rest} render={renderFn(component)} />;
};

export default PrivateRoute;