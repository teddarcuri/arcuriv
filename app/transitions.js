export default function() {

    let duration = 750;

    this.transition(
      this.fromRoute('about'),
      this.use('explode', {
          pickOld: 'h1',
          use: ['toUp', {duration}],
        }, {
          pickNew: 'h1',
          use: ['toDown', {duration}]
        },{
          use: ['fade', {duration: duration/2}]
        }
      )
    );

    this.transition(
      this.fromRoute('projects'),
      this.use('explode', {
          pickOld: 'h1',
          use: ['toUp', {duration}],
        }, {
          pickNew: 'h1',
          use: ['toDown', {duration}]
        }, {
          use: ['fade', {duration: duration/2}]
        }
      )
    );

    this.transition(
      this.fromRoute('contact'),
      this.use('explode', {
          pickOld: 'h1',
          use: ['toUp', {duration}],
        }, {
          pickNew: 'h1',
          use: ['toDown', {duration}]
        }, {
          use: ['fade', {duration: duration/2}]
        }
      )
    );
};
