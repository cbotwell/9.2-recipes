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
    var card = find('.card');
    var header = find('.header');
    var servings = find('.servings');
    var ingredients = find('.ingredients');
    var directions = find('.directions');

    assert.ok(card);
    assert.ok(header);
    assert.ok(servings);
    assert.ok(ingredients);
    assert.ok(directions);
  });
});

test('A user should see a recipe', function(assert) {
  visit('/');

  andThen(function() {
    var recipeName = findWithAssert('.header').html().trim();
    var servings = findWithAssert('.servings').html().trim();
    var firstIngredient = findWithAssert('.ingredients:eq(0) li:eq(0)').html().trim();
    var directions = findWithAssert('.directions p').html().trim();

    assert.equal(recipeName, 'The Best Caesar');
    assert.equal(servings, 'Makes 4 Servings');
    assert.equal(firstIngredient, '2 medium heads of romain lettuce');
    assert.equal(directions, 'Add a pinch of salt and using a fork, mash anchovies. Add lemon juice and red wine vinegar and whisk until anchovies are broken down. Add freshly peeled garlic cloves, Add Grey Poupon, Tabasco, Worchestershire sauce, black pepper, evoo, and whisk until thickly blended. Added chilled lettuce leaves torn to bite size peices and toss by hand. Top with parmesan cheese and season with black pepper.');
  });
});
