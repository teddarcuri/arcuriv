import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.find('project');
    },
    setupController: function(controller, model){

       Ember.run.schedule('afterRender', this, function () {

         // Rotate Logo
         $(".project-tile").velocity("transition.slideRightIn", {duration: 1250, stagger: 150, drag: true});

       });
     }
});
