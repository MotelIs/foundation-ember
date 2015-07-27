import UnprotectedRoute from './unprotected';

export default UnprotectedRoute.extend({
  model: function(params) {
    return this.store.createRecord('password-reset', key: params['reset_token'] });
  },

  actions: {
    save: function() {
      this.currentModel.save().then(function() {
        this.transitionTo('login');
      });
    }
  }
});
