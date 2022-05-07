module.exports = {
  content: ['./src/**/*.{html,js}', 
  './node_modules/tw-elements/dist/js/**/*.js',
  './public/**/*.{html,js,handlebars}',
  './views/**/*.{html,js,handlebars}'],
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
