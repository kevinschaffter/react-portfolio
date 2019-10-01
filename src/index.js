import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { AppRoot } from './pages';
import './App.scss';

ReactDOM.render(<AppRoot />, document.getElementById('root'));

serviceWorker.unregister();
