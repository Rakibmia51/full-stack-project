const express = require("express");
const { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe } = require("../controllers/recipe");
const router = express.Router()




router.get('/', getRecipes) // Get All Recipes
router.get('/:id', getRecipe) // Get All Recipe by id
router.post('/', addRecipe) // Add Recipes
router.put('/:id', editRecipe) // Edit Recipes
router.delete('/:id', deleteRecipe) // Delete Recipes


module.exports = router;