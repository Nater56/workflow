/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import Routine from './components/Routine.js';
require('./styles/site.css');
var $ = require('jquery');
global.jQuery = $;
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');
require('font-awesome/css/font-awesome.min.css');
require('font-awesome/fonts/fontawesome-webfont.woff');


ReactDOM.render(<Routine />, document.getElementById('routine'));
