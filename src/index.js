import React from 'react';
import ReactDOM from 'react-dom';

import LinksContainer from './components/containers/linksContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <LinksContainer />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
