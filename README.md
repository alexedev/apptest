# apptest
Job application

run `npm install` to install modules for development

run `webpack -w` to activate webpack watcher (concatenates files, compiles jsx to js, etc.)

For now now the result is easily styled with bootstrap

compiled non-minified non-uglified result is in public folder (you can just download index.html and bundle.js and open index.html in browser without running any server). After minification bundle.js is about 220Kb ( http://skalman.github.io/UglifyJS-online/) (can be made even less with additional webpack configuration)
