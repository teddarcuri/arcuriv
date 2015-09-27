import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        return $.getJSON("http://localhost:1337/project/" + params.project_id);
    },
    actions: {
        updateProject: function() {
            alert();
        },
        deleteProject: function(id) {
            var route = this;
            $.ajax({
                url: "http://localhost:1337/project/" + id,
                method: "DELETE",
                success: function() {
                    $("#alert-bar").html("successfully deleted " + id);
                    $("#alert-bar").addClass('active');
                    setTimeout(function(){
                        $("#alert-bar").removeClass('active');
                    }, 3000);
                    route.transitionTo('projects.index');
                }
            });
        }
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
