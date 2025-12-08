const express = require("express");
const { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe, upload } = require("../controllers/recipe");
const verifyToken = require("../middleware/auth");
const router = express.Router()




router.get('/', getRecipes) // Get All Recipes
router.get('/:id', getRecipe) // Get All Recipe by id
router.post('/',upload.single('file'),verifyToken, addRecipe) // Add Recipes
router.put('/:id',upload.single('file'), editRecipe) // Edit Recipes
router.delete('/:id', deleteRecipe) // Delete Recipes


module.exports = router;