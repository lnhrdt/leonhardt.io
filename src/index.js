import 'script!jquery';
import 'what-input';
import 'foundation-sites';
$(() => $(document).foundation());

import './styles.sass'

import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello';

ReactDOM.render(<Hello/>, document.getElementById('app'));
