export default function() {

    let duration = 700;

    // Show/Hide the nav
    this.transition(
       this.hasClass('nav-toggle'),

       // this makes our rule apply when the liquid-if transitions to the
       // true state.
       this.toValue(true),
       this.use('explode',
        {matchBy: 'data-image', use: ['flyTo', {duration: duration}]},
        { use: ['fade', {duration: duration / 2 }] }
       ),

       // which means we can also apply a reverse rule for transitions to
       // the false state.
       this.reverse('fade', {duration})
     );

    // To index
    this.transition(
      this.toRoute('index'),
      this.use('explode',
        {use: ['fade', {duration: duration / 2}]}
      )
    );

    // From Index
    this.transition(
      this.fromRoute('index'),
      this.use('fade')
    );

    // To index
    // this.transition(
    //   this.fromRoute('index'),
    //   this.use('toUp', {duration: duration / 2})
    // );

    // To About
    this.transition(
      this.toRoute('about'),
      this.use('explode',
      { pickNew: 'h1', use: ['toDown', {duration}] },
      { use: ['fade', {duration: duration / 2 }] }
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

    // From all projects to single project
    this.transition(
      this.fromRoute('projects.index'),
      this.toRoute('projects.project'),
      this.use('explode',
        {matchBy: 'data-project-img', use: ['flyTo', {duration: duration}]},
        { pickOld: 'h1', use: ['toUp', {duration}] },
        { pickNew: 'h1', use: ['toDown', {duration}] },
        {use: ['fade', {duration: duration / 2}] }
      ),
      this.reverse('explode',
        {matchBy: 'data-project-img', use: ['flyTo', {duration: duration}]},
        { pickNew: 'h1', use: ['toDown', {duration}] },
        { pickOld: 'h1', use: ['toUp', {duration}] },
        {use: ['fade', {duration: duration / 2}] }
      )
    );

    // From projects to new project
    this.transition(
      this.fromRoute('projects.index'),
      this.toRoute('projects.new'),
      this.use('explode',
        { pickNew: 'h1', use: ['toDown', {duration}] },
        { pickOld: 'h1', use: ['toUp', {duration}] },
        {use: ['fade', {duration: duration / 2}] }
      ),
      this.reverse('explode',
        { pickNew: 'h1', use: ['toDown', {duration}] },
        { pickOld: 'h1', use: ['toUp', {duration}] },
        {use: ['fade', {duration: duration / 2}] }
      )
    );
}
