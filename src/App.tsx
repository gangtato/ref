import React from 'react';
import Router from './router';
import store from './store';
import { Provider } from 'react-redux';
import { listen } from './listener';

const App = () => {
    React.useEffect(() => {
       listen();
    },[])
  return(
    <Provider store={store}>
        <Router/>
    </Provider>
  );
}

export default App;
