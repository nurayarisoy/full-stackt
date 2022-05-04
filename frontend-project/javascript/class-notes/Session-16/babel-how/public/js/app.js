'use strict';

var _console;

var cakeRecipe;
var eggCount = 4;
var sugarAmount = 1.5;
var timeToMix = 10;

var ingredients = [];
ingredients.push(eggCount + ' eggs');
ingredients.push(sugarAmount + ' glass of sugar');
ingredients.push('1\u2009\xBD cups all-purpose flour');
(_console = console).log.apply(_console, ingredients);
cakeRecipe = 'add ' + eggCount + ' eggs and ' + sugarAmount + ' glass of sugar into the mixer bowl, and mix for \n' + timeToMix + ' minutes\nadd flour then mix again';
var cook = function cook() {
  console.log(cakeRecipe);
  console.log('cake is cooking for 40mins');
};
cook();