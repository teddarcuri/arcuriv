import Ember from 'ember';

export default Ember.Route.extend({
    redirect: function() {
        var route = this;
        // this redirects / to /about
        setTimeout(function(){ route.transitionTo('about'); }, 3000);
    }
});
