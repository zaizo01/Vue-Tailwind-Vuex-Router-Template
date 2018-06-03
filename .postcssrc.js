module.exports = {
  "plugins": [
    // to edit target browsers: use "browserlist" field in package.json
    require('postcss-import')(),
    require('tailwindcss')('./tailwind-config.js'),
    require('autoprefixer')
  ]
}