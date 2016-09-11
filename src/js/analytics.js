import scriptjs from 'scriptjs';
import 'autotrack';

scriptjs('https://www.google-analytics.com/analytics.js');

ga('create', 'UA-83987706-1', 'auto');

ga('require', 'cleanUrlTracker', {
    indexFilename: 'index.html',
    trailingSlash: 'remove'
});

ga('require', 'outboundLinkTracker');

ga('send', 'pageview');
