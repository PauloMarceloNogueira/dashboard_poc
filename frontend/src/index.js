import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
