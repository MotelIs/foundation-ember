import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr(),
  passwordConfirmation: DS.attr(),
  admin: DS.attr('boolean', { default: false }),
  createdAt: DS.attr(),
  updatedAt: DS.attr()
});
