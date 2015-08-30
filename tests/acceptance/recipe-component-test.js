import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'app-recipes/tests/helpers/start-app';

module('Acceptance | recipe component', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting recipe route', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('A user should see a recipe card', function(assert) {
  visit('/');

  andThen(function() {
    var card = findWithAssert('.card');
    var header = findWithAssert('.header');
    var servings = findWithAssert('.servings');
    var ingredients = findWithAssert('.ingredients');
    var directions = findWithAssert('.directions');

    assert.equal(card, true);
    assert.equal(header, true);
    assert.equal(servings, true);
    assert.equal(ingredients, true);
    assert.equal(directions, true);
  });
});
