const path = require('path');
const UnusedJSPlugin = require('wp-plugin-unused-js');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new UnusedJSPlugin()],
};
