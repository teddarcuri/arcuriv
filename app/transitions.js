export default function() {

    let duration = 1050;

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
        {use: ['fade', {duration: duration / 2}] }
      ),
      this.reverse('explode',
        {matchBy: 'data-project-img', use: ['flyTo', {duration: duration}]},
        {use: ['fade', {duration: duration / 2}] }
      )
    );
};
