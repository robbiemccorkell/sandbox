import React from 'react';
import DefaultLayout from './layouts/default';

class App extends React.Component {
  render() {
    return(
      <DefaultLayout>
        <div>Hello World</div>
      </DefaultLayout>
    );
  }
}

export default App;
