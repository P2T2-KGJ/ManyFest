module.exports = {
  content: ['./src/**/*.{html,js}', 
  './public/**/*.{html,js,handlebars}',
  './views/**/*.{html,js,handlebars}'],
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
