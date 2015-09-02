import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.resource('projects', function() {
    this.route('new');
    this.route('project', {path: '/:project_id'});
  });

});

export default Router;
