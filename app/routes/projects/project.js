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

              $('.flickity-nav').flickity({
                  asNavFor: '.flickity-gallery',
                  contain: true,
                  pageDots: false,
                  prevNextButtons: false,
                  cellAlign: 'left'
              });

              // Rotate Logo
              $(".flickity-gallery").velocity("transition.slideUpBigIn", {duration: 2000});

              // Slide in technology columns
              $(".container").velocity("transition.slideUpIn", 2500);
              $(".col-1-2 li").velocity("transition.slideLeftIn", {duration: 2000, stagger: 400});
        });
    }
});
