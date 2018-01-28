import React from 'react';
import LinksContainer from './components/containers/linksContainer';
import { getState } from 'redux';
import store from './index';

class App extends React.Component {
  render() {
    return (
      <div>
        <LinksContainer store={store} />
      </div>
    );
  }
}

export default App;
