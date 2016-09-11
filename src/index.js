import 'script!jquery';
import 'what-input';
import 'foundation-sites';
$(() => $(document).foundation());

import './sass/styles.sass'

import landingTemplate from './html/landing.handlebars'
document.body.insertAdjacentHTML('beforeend', landingTemplate());
