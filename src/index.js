import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import LinksApp from './reducers/linksApp';
import LinksContainer from './components/containers/linksContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <LinksContainer/>
      </div>
    );
  }
}

let store = createStore(LinksApp)
//console.log(store.getState());

ReactDOM.render(
  <Provider store = { store } >
    <App/>
  </Provider>,
  document.getElementById('app'),
);
