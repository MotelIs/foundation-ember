import UnprotectedRoute from './unprotected';

export default UnprotectedRoute.extend({
  model: function() {
    return this.store.createRecord('password-recovery');
  },

  actions: {
    save: function() {
      var self = this;
      this.currentModel.save().then(function() {
        self.controller.set('checkEmail', true);
      });
    }
  }
});
