import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
            return $.getJSON("http://localhost:1337/project");
    },
    setupController: function(){
       Ember.run.schedule('afterRender', this, function () {
         $(".project-tile").velocity("transition.slideRightIn", {duration: 1250, stagger: 150, drag: true});
       });
   },
   actions: {
       createProject: function(name, description, thumbnail) {
           var route = this;
           $.ajax({
              type: "POST",
              url: "http://localhost:1337/project",
              data: {"name": name, "body": description, "thumbnail": thumbnail},
              success: function() {
                  route.refresh();
                  $("#alert-bar").html("successfully added " + name);
                  $("#alert-bar").addClass("active");
                  setTimeout(function(){
                      $("#alert-bar").removeClass('active');
                  }, 3000);
              }
            });
       }
   }
});
