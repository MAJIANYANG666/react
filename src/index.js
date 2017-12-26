import _ from 'lodash';
import j from 'jquery';

function component() {
    // var element = document.createElement('div');
    var element = j('<div></div>');
    // Lodash, currently included via a script, is required for this line to work
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.html(_.join(['Hello','webpack'], ' '))

    // return element;
    return element.get(0);
}

document.body.appendChild(component());