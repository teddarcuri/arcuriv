export default function() {

    this.transition(
      this.fromRoute('about'),
      this.use('toUp')
    );

    this.transition(
      this.fromRoute('contact'),
      this.use('toDown')
    );
};
