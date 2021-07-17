const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getRecipe);
router.post('/', controller.addRecipe);
router.get('/:id', controller.getRecipeById);
router.put('/:id', controller.updateRecipe);
router.delete('/:id', controller.deleteRecipe);

module.exports = router;