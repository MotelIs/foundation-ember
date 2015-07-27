import Protected from './protected';

export default Protected.extend({
  model: function() {
    return this.get('session').get('user');
  },

  afterModel: function(model) {
    if(model.get('admin')) {
      return this.transitionTo('admin');
    }
  }
});
