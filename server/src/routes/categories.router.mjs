import { Router } from 'express';
import * as categoriesController from '../controllers/categories.controller.mjs';

const categoriesRouter = Router();

categoriesRouter
  .get('/', categoriesController.fetchAllCategories)
  .post('/', categoriesController.createCategory)
  .get('/:id', categoriesController.fetchCategoryById)
  .put('/:id', categoriesController.updateCategoryById)
  .delete('/:id', categoriesController.deleteCategoryById);

export default categoriesRouter;
