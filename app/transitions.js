export default function() {

    let duration = 700;

    this.transition(
      this.fromRoute('about'),
      this.use('explode', {
          pickOld: 'h1',
          use: ['toLeft', {duration}],
        }, {
          pickNew: 'h1',
          use: ['toRight', {duration}]
        }, {
          use: ['fade', {duration}]
        }
      )
    );

    this.transition(
      this.fromRoute('contact'),
      this.use('explode', {
          pickOld: 'h1',
          use: ['toLeft', {duration}],
        }, {
          pickNew: 'h1',
          use: ['toRight', {duration}]
        }, {
          use: ['fade', {duration}]
        }
      )
    );
};
