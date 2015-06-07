import Ember from 'ember';

export default Ember.Route.extend({
    setupController: function(controller, model){
       this._super('controller', model);
       Ember.run.schedule('afterRender', this, function () {

         // Rotate Logo
         //$("#main-logo").velocity({rotateZ: 180}, 1700);
         // Slide in Donut Charts
         $(".donut-chart").velocity("transition.expandIn", {stagger: 250}, 4000);
         // Slide in technology columns
         $("p").velocity("transition.slideUpIn", 2000);

       });
     }
});
