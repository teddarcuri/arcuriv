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
                cellAlign: 'left',
                contain: true
              });
        });
    }
});
