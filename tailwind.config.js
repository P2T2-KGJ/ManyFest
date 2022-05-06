module.exports = {
  content: ['./src/**/*.{html,js}', 
  './node_modules/tw-elements/dist/js/**/*.js',
'./public.**/*.{html,js}'],
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
