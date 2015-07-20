import UnprotectedRoute from './unprotected';

export default UnprotectedRoute.extend({
  model: function() {
    return this.store.createRecord('user');
  },

  actions: {
    register: function() {
      var self = this;
      var identification = this.currentModel.get('email');
      var password = this.currentModel.get('password');

      this.currentModel.save().then(function() {

      }, function() {

      }).then(function() {
        self.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', {
          identification: identification,
          password: password
        });
      });
    }
  }
});
