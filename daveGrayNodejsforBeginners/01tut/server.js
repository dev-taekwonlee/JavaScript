// 1) Node runs on a ServiceWorkerRegistration, not in a browser
// 2) The console is the terminal window

//  Input 'node server' on the terminal with the code below.
console.log('Hello world!')

// 3) global object instead of window object
// console.log(global)

// 4) Has common core modules that we will explore
// 5) CommonJS modules instead of ES6 modules

const os = require('os')
const path = require('path')

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))
// {
//     root: '/',
//     dir: '/Users/taekwon/Desktop/nodeJS/DaveGray_nodejs/tutorial01',
//     base: 'server.js',
//     ext: '.js',
//     name: 'server'
//   }


// const math = require('./math')
// console.log(math.add(2, 3))

const { add, substract, multiply, divide } = require('./math')

console.log(add(6, 3))
console.log(substract(6, 3))
console.log(multiply(6, 3))
console.log(divide(6, 3))

