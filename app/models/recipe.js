import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  source: DS.attr(),
  servings: DS.attr(),
  ingredients: DS.attr(),
  directions: DS.attr(),
});
