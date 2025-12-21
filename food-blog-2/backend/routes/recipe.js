const express = require('express')
const { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe } = require('../controllers/recipe')
const router = express.Router()


router.get("/",getRecipes) // get Recipes
router.get("/:id",getRecipe) // get Recipes
router.post("/",addRecipe) // add recipe
router.put("/:id", editRecipe) // edite recipe
router.delete("/:id", deleteRecipe) // delete recipe





module.exports= router
