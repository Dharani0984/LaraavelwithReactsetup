const mix = require('laravel-mix');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

mix.js('resources/js/app.js', 'public/js')
   .react()
   .sass('resources/sass/app.scss', 'public/css')
   .webpackConfig({
       plugins: [
           new ReactRefreshWebpackPlugin()
       ],
       module: {
           rules: [
               {
                   test: /\.(js|jsx)$/,
                   exclude: /node_modules/,
                   use: {
                       loader: 'babel-loader',
                       options: {
                           presets: ['@babel/preset-react']
                       }
                   }
               }
           ]
       }
   })
   .browserSync('http://127.0.0.1:8000'); // Change this to your local development URL
