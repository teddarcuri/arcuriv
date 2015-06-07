export default function() {

    let duration = 700;

    // From index to about
    this.transition(
      this.fromRoute('index'),
      this.toRoute('about'),
      this.use('explode',
      { matchBy: 'data-image', use: ['flyTo', {duration}] },
      { use: ['fade', {duration: duration/ 2 }] }
      )
    );

    // To About
    this.transition(
      this.toRoute('about'),
      this.use('explode',
      { pickNew: 'h1', use: ['toDown', {duration}] },
      { use: ['fade', {duration: duration/ 2 }] }
      )
    );

    // To Work
    this.transition(
      this.toRoute('projects'),
      this.use('explode',
      { pickNew: 'h1', use: ['toDown', {duration}] },
      { use: ['fade', {duration: duration / 2}] }
      )
    );

    // To Contact
    this.transition(
      this.toRoute('contact'),
      this.use('explode',
      { pickNew: 'h1', use: ['toDown', {duration}] },
      { use: ['fade', {duration: duration/ 2 }] }
      )
    );

    // From all work to single project
    this.transition(
      this.fromRoute('projects.index'),
      this.toRoute('projects.project'),
      this.use('explode',
        {matchBy: 'data-project-img', use: ['flyTo', {duration: duration}]},
        { pickOld: 'h1', use: ['toUp', {duration}] },
        {use: ['fade', {duration: duration / 2}] }
      ),
      this.reverse('explode',
        {matchBy: 'data-project-img', use: ['flyTo', {duration: duration}]},
        { pickNew: 'h1', use: ['toDown', {duration}] },
        { pickOld: 'h1', use: ['toUp', {duration}] },
        {use: ['fade', {duration: duration / 2}] }
      )
    );
};
