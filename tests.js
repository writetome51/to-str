import {toStr} from './index.js';


console.log(toStr(1));
// --> '1'

console.log(toStr(0.001));
// --> '0.001'

console.log(toStr(-0.001));
// --> '-0.001'

console.log(toStr());
// 'undefined'

console.log(typeof toStr());
// 'string'

console.log(toStr('a'));
// 'a'

console.log(toStr(-0));
// '0'

console.log(toStr([]));
// --> ''

console.log(toStr( [1, 2, 3, [4]] ));
// '1,2,3,4'

