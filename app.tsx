/* @jsx node */
/* @jsxFrag Fragment */

import { node,
  //  Fragment
 } from 'jsx-pragmatic';

import { dom } from 'jsx-pragmatic-classname-to-class-renderer';

import { Hello } from './src/tsx/Hello';

function render() {
return (
  <Hello></Hello>
).render(dom());
}

document.body.appendChild(render());
