import Ember from 'ember';

export default Ember.Route.extend({
    needs: ['application'],
    setupController: function() {
        Ember.run.schedule('afterRender', this, function () {

            var circle = document.getElementById('circle');
            var a  = document.getElementById('a');
            var v = document.getElementById('v');

            function drawIt(selector, duration) {
                var path = selector;
                var length = path.getTotalLength();
                // Clear any previous transition
                path.style.transition = path.style.WebkitTransition =
                  'none';
                // Set up the starting positions
                path.style.strokeDasharray = length + ' ' + length;
                path.style.strokeDashoffset = length;
                // Trigger a layout so styles are calculated & the browser
                // picks up the starting position before animating
                path.getBoundingClientRect();
                // Define our transition
                path.style.transition = path.style.WebkitTransition =
                  'stroke-dashoffset ' + duration + ' ease-in-out';
                // Go!
                path.style.strokeDashoffset = '0';
            }

            function fillEm() {
                var svgs = [circle, a, v];

                $.each(svgs, function(){
                    this.style.fill = "#444";
                    this.style.stroke = "none";
                });
            }

            drawIt(circle, '5s');
            drawIt(a, '4s');
            drawIt(v, '4s');
            $("#loading-logo").velocity({rotateZ: "1080deg"}, {
                duration: 4050,
                complete: function() {
                    fillEm();
                }
            });

        });
    },

    redirect: function() {
        // this redirects to /about
        // setTimeout( function() {
        //     this.transitionTo('about');
        // }.bind(this), 5000);
    }
});
