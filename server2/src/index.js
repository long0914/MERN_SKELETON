import _ from 'lodash';

 function component() {
   const element = document.createElement('div');

  // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
 }

 document.body.appendChild(component());

// Path: server2/src/index.js
 const result = [1, 2, 3, 4]
  .map(n => n * 2)
  .filter(n => n > 4);
console.log(result); // [6, 8]
