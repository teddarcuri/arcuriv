import Ember from 'ember';

export default Ember.Route.extend({
    setupController: function(controller, model){
       this._super('controller', model);
       Ember.run.schedule('afterRender', this, function () {
         $(".donut-chart").velocity("transition.slideUpIn", {stagger: 200}, 1000);
       });
     }
});
