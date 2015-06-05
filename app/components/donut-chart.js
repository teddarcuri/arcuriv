import Ember from 'ember';

export default Ember.Component.extend({

    classNames: ['donut-chart-container'],

    _initializeChart: function() {
      var self = this;

      $('.donut-chart').easyPieChart({
            scaleColor: false,
            scaleLength: 0,
            lineCap: 'round',
            lineWidth: 3,
            size: 80,
            animate: 3050
        });

   }.on('didInsertElement')
});
