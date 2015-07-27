import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['header-controls'],

  action: {
    invalidateSession: function() {
      this.sendAction('invalidateSession');
    }
  }
});
