import DS from 'ember-data';

export default DS.Model.extend({
  key: DS.attr(),
  password: DS.attr(),
  passwordConfirmation: DS.attr()
});
