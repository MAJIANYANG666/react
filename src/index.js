//import from 'lodash' 的意思是从 lodash 里得到默认导出，并将默认导出命名为 ，这个 _ 可以换成任何一个其他的变量名。
import _ from 'lodash';
import j from 'jquery';
import foo from './foo'
function component() {
    // var element = document.createElement('div');
    var element = j('<div></div>');
    // Lodash, currently included via a script, is required for this line to work
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.html(_.join(['hioo','webpack'], ' '))

    // return element;
    return element.get(0);
}

document.body.appendChild(component());
console.log(foo)
console.log(foo())
console.log(1)