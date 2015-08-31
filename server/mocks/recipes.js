module.exports = function(app) {
  var express = require('express');
  var recipesRouter = express.Router();

  recipesRouter.get('/', function(req, res) {
    res.send({
      'recipes': [
      {
        id: 1,
        name: 'The Best Cesar',
        source: 'http://thebestcaesar.com/',
        servings: 4,
        ingredients: [{
            amount: '2',
            name: 'medium heads of romain lettuce'
          },
          {
            amount: '2',
            name: 'anchovy fillets'
          },
          {
            amount: '3',
            name: 'cloves garlic'
          },
          {
            amount: '1/2',
            name: 'eureaka lemon, juiced'
          },
          {
            amount: '1 tsp.',
            name: 'red wine vinegar'
          },
          {
            amount: '2 tbsp.',
            name: 'Grey Pupon dijon mustard'
          },
          {
            amount: '3 dashes',
            name: 'Tobasco'
          },
          {
            amount: '8 dashes',
            name: 'Lea & Perrins worchestshire sauce'
          },
          {
            amount: '2 oz.',
            name: 'olive oil (EVOO)'
          },
          {
            amount: '3 oz.',
            name: 'freshly grated parmesan cheese'
          },
          {
            amount: 'to taste',
            name: 'salt'
          },
          {
            amount: 'to taste',
            name: 'black pepper'
          },
        ],
        directions: 'Add a pinch of salt and using a fork, mash anchovies. Add lemon juice and red wine vinegar and whisk until anchovies are broken down. Add freshly peeled garlic cloves, Add Grey Poupon, Tabasco, Worchestershire sauce, black pepper, evoo, and whisk until thickly blended. Added chilled lettuce leaves torn to bite size peices and toss by hand. Top with parmesan cheese and season with black pepper.'
      }]
    });
  });

  recipesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  recipesRouter.get('/:id', function(req, res) {
    res.send({
      'recipes': {
        id: req.params.id
      }
    });
  });

  recipesRouter.put('/:id', function(req, res) {
    res.send({
      'recipes': {
        id: req.params.id
      }
    });
  });

  recipesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/recipes', recipesRouter);
};
