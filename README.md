# Vue-Tailwind-Vuex-Router-Template

Project template for Vue and Tailwind. It includes Vuex and Router.

## Install

Simply clone the respository and `npm install`.

## Template Creation Process

The process of setting up tailwind with Vue is somewhat tricky, and it doesn't seem to work out of the box with some of the defaults of some of the various Vue-cli templates. I've culled information from a variety of sources to put together this template. Here's the process I used:

1.  On the command line: `vue create vue-tailwind-template`. You may want to make sure you have the latest update: `npm i -g -u @vue/cli`.
    a) I selected manual rather than default.
    b) For this template, I selected Router, Vuex and linting but I did _not_ select CSS Pre-processors, as postcss appears to be more-or-less supported 'out of the box'. (I selected standard linting...)
    c) This is crucial: when asked about config file placement, select 'In dedicated config files`.
    d) You can save as a preset, if you wish.
2.  Follow the instructions to `cd` into your new project and `npm install`.
3.  Also: `npm i -S tailwindcss postcss-import`
4.  Next, run: `./node_modules/.bin/tailwind init tailwind-config`. This creates tailwind-config.js in your root folder.
5.  Edit `.postcssrc.js` in your root folder:

```js
module.exports = {
  plugins: [
    // to edit target browsers: use "browserlist" field in package.json
    require('postcss-import')(),
    require('tailwindcss')('./tailwind-config.js'),
    require('autoprefixer')
  ]
}
```

6.  I created a new `styles` folder and created `main.css`. The file _must_ contain the three @tailwind directives. I added the rest of the code to experiment with importing components (below) and making global modifications.
7.  Import your `main.css` file into `main.js` using `import '@/styles/main.css'`.
8.  You can create and import component templates, as I have done here in `main.css`. I borrowed the template css information from someone, but I cannot recall where now. If you wrote this css, I'll be happy to credit you.
9.  Finally, I edited the vue template files to put an image and three cards into the tailwind-test component. I've adjusted some of the reactive break points, margins, and padding, but it still needs a few more tweaks.

I'll happily entertain PRs!
