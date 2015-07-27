import Session from 'simple-auth/session';
import Ember from 'ember';

export default {
  name: 'authentication',
  before: 'simple-auth',
  initialize: function(container) {
    Session.reopen({

      user: function() {
        var user_id = this.get('user_id');
        if(!Ember.isEmpty(user_id)) {
          return container.lookup('store:main').find('user', user_id);
        }
      }.property('access_token', 'user_id')
    });
  }
};
