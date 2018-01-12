import React from 'react';
import ReactDOM from 'react-dom';

import Links from './components/containers/Links';

class App extends React.Component {
  render() {
    return (
      <div>
	<Links />
      </div>
    )
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('app')
)
