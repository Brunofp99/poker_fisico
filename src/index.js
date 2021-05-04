import React from 'react';
import ReactDOM from 'react-dom';
import { ControllerProvider } from './Providers/Controller';
import App from './Router'

ReactDOM.render(
  <React.StrictMode>
    <ControllerProvider>
      <App />
    </ControllerProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

