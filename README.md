# Readme for Hyperapp-test
To run:
```
npm run start
```
To build for production
```
npm run build
```
To run viewable on local phone
* build for production
```
cd dist
http-server .
```


Based on webpack 4 tutorial at
https://www.valentinog.com/blog/webpack-tutorial/
but with hyperapp instead of react

Babel transpilation added.

webpack-dev-server added.

consider: webpack-dev-server for hot module reloading in future...
https://github.com/webpack/webpack-dev-middleware


consider: Sass SCSS loading
https://github.com/webpack-contrib/sass-loader
for production, best to extract css to single file via
https://github.com/webpack-contrib/mini-css-extract-plugin
and consider also: css minification described on that same page


consider: structure of hyperapp application as per..
https://github.com/kwasniew/hyperapp-realworld-example-app


consider: jest for testing...?

consider: typescript...?
