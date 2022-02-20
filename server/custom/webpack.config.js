const path = require('path');

 module.exports = {
 entry: './basicVideoCall.js',
 output: {
 filename: 'bundle.js',
 path: path.resolve(__dirname, './dist'),
 },
 devServer: {
 compress: true,
 port: 9000
 }
 };