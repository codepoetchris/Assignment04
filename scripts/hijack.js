var ANCHOR_SELECTOR = 'a';

function hijackLink(link){
    link.setAttribute('href', '#');
    link.setAttribute('data-href', ' ');
}

function hijackLinks() {
    'use strict';
    var anchors = document.getElementsByTagName(ANCHOR_SELECTOR);
    var anchorArray = [].slice.call(anchors);
    anchorArray.forEach(hijackLink);
}
