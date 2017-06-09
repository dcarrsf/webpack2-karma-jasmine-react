import React from 'react';
import { render } from 'react-dom';
import App from './containers/App.jsx';

/**
 * *******************************************************
 *
 *  Bundling entry-point for the app.
 *
 *  @author     Dan Carr
 *  @date       June 2017
 *
 * *******************************************************
 */
const div = document.createElement('div');

document.body.appendChild(div);

render(<App/>, div);
