/*
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:
// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
*/

function cakes(recipe, available) {

  // You have keys in your recipe JSON and keys in your ingredient JSON. 
  // A key must exist in both the objects for you to be able to make the recipe. 
  // You can only make the recipe if all the keys from the recipe object is present in available. 
  // So loop through the keys in the recipe object and for each key find the same key in available.
  // If the key in available is not found then divide by 0 and see the universe implode. 
  
  // From the example above, available.flour / recipe.flour will give us 1200 / 500 2 after Math.floor
  // From the example above, available.sugar / recipe.sugar will give us 1200 / 200 6 after Math.floor
  // But we cannot make 6 recipes when we have two units of floor and that is why we have to select the
  // minimum of two numbers (2, & 6) which means you have to keep track of the last minimum number. 

  // start by iterating ove recipe keys and use the reduce function and keep track of the last value and 
  // current ingredient. Initialize the last value (a) with Infinity because we have large egos like that
  // thinking humans can start something at Infinity, as Math.min will either return infinity, if the 
  // key found in recipe is not found in available JSON. If the key is found then you return that value

  
  let minimumRecipes = Object.keys(recipe).reduce((lastValue, ingredient) => {
    let x =  Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), lastValue)
    return x;
  }, Infinity);
  return minimumRecipes;
}



// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript