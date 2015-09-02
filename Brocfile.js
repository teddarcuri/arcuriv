/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.


app.import('bower_components/three.js/three.js');
app.import('bower_components/joaocunha-elevator.js/elevator.js');
app.import('bower_components/js-md5/js/md5.js');
app.import('bower_components/easypie/dist/jquery.easypiechart.js');
app.import('bower_components/flickity/dist/flickity.pkgd.min.js');
app.import('bower_components/flickity/css/flickity.css');
app.import('bower_components/velocity/velocity.js');
app.import('bower_components/velocity/velocity.ui.js');
app.import('bower_components/zoom.js/js/zoom.js');
app.import('bower_components/zoom.js/css/zoom.css');
app.import('vendor/js/bootstrap/transition.js');

module.exports = app.toTree();
