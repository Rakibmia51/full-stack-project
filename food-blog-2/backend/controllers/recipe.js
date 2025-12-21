const Recipes = require("../models/recipe")
const { json } = require("express")

const getRecipes = async (req,res)=>{
    const recipes = await Recipes.find()
    res.json(recipes)
}
const getRecipe = async (req,res)=>{
    const recipe = await Recipes.findById(req.params.id)
    res.json(recipe)
}

const addRecipe = async (req, res)=>{
    const {title, ingredients, instructions, time} = req.body
    if(!title || !ingredients || !instructions){
        res.json({message: "Requred fields can't be empty"})
    }
    const newRecipe = await Recipes.create({
        title, ingredients, instructions, time //,coverImage:req.file.filename,createdBy:req.user.id
    })
    return res.json(newRecipe)
   
}

const editRecipe = async (req,res)=>{
     const {title, ingredients, instructions, time} = req.body
     let recipe = await Recipes.findById(req.params.id)
     try {
        if(recipe){
            await Recipes.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
            res.json({ title, ingredients, instructions, time})
        }
     } catch (error) {
        return res.status(404).json({message: "error"})
     }
}

const deleteRecipe = async (req,res)=>{
    try {
        const recipe = await Recipes.deleteOne({_id: req.params.id})
        if(recipe.deletedCount === 0){
            return res.status(404).json({ message: "Recipe not found" });
        }
        res.status(200).json({
            message: "Recipe deleted successfully",
            deleted: recipe
        });
    } catch (error) {
         res.status(500).send(error.message);
    }
}

module.exports={getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe}