import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  servings: DS.attr(),
  ingredients: DS.attr()
});
