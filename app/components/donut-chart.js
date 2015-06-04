import Ember from 'ember';

export default Ember.Component.extend({

    classNames: ['donut-chart-container'],

    _initializeChart: function() {
      var self = this;

      $('.donut-chart').easyPieChart({
            scaleColor: false,
            scaleLength: 0,
            lineCap: 'square',
            lineWidth: 4,
            size: 100,
            animate: 2750
        });

   }.on('didInsertElement')
});
