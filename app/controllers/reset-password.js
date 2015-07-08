import Ember from 'ember';

export default Ember.Controller.extend({
  hasKeyError: Ember.computed.notEmpty('model.errors.key'),
  keyError: Ember.computed.alias('model.errors.key.firstObject')

});
