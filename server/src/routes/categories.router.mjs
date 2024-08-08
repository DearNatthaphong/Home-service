import { Router } from 'express';
import * as categoriesController from '../controllers/categories.controller.mjs';

const categoriesRouter = Router();

categoriesRouter
  .post('/', categoriesController.createCategory)
  .get('/', categoriesController.fetchAllCategories)
  .get('/:id', categoriesController.fetchCategoryById)
  .put('/:id', categoriesController.updateCategoryById)
  .delete('/:id', categoriesController.deleteCategoryById);

export default categoriesRouter;
