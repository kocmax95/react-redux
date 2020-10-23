import React from 'react';
import { Provider } from 'react-redux';

import Form from './Form';
import List from './List';


import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Form/>
        <p>Programowanie z samurajem</p>
        <List/>
    </div>
    </Provider>
  );
}

export default App;
