import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import HeaderWithEmphasis from './components/header/withEmphasis';

const props = {
  text: 'Hello World!',
  color: '#fff',
  backgroundColor: '#3EB36C',
};

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <Header
        text={props.text}
        color={props.color}
        backgroundColor={props.backgroundColor}
      />
      <HeaderWithEmphasis
        text={props.text}
        color={props.color}
        backgroundColor={props.backgroundColor}
      />
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);
