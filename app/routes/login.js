import Ember from 'ember';

export default Ember.Route.extend({

    actions: {
        attemptLogin(){
            $.ajax({
                headers: {"X-Test-Header": "test-value"},
                url: "http://localhost:1337/login"
            });
        }
    }

});
