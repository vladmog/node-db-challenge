const express = require('express');

const RecipesRouter = require('../recipes/recipes-router');
const IngredientsRouter = require('../ingredients/ingredients-router');

const router = express.Router();

router.use('/projects', RecipesRouter)
router.use('/ingredients', IngredientsRouter)

module.exports = router;