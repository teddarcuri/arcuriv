import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        return this.store.find('project', params.project_id);
    },
    setupController: function(controller, model){
        this._super(controller, model);
        Ember.run.schedule('afterRender', this, function () {
            $('.flickity-gallery').flickity({
                // options
                contain: true,
                wrapAround: true,
                pageDots: false
              });

              // Rotate Logo
              $(".flickity-gallery").velocity("transition.slideUpBigIn", 2000);

              // Slide in technology columns
              $(".container").velocity("transition.slideUpBigIn", 2500);
            //   $(".col-1-2").velocity("transition.slideUpBigIn", 2500);
              $(".col-1-2 li").velocity("transition.slideUpIn", {duartion: 3000, stagger: 400});
              $("p").velocity("transition.slideLeftIn", 200);
        });
    }
});
