import { Test } from './test'

const test = new Test();
let prop = test.getProp();
console.log(prop);

test.setProp('shoul not work');
prop = test.getProp();

console.log(prop);
