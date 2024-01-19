import { Router } from "express";
import { addProductUseCase } from "./useCases/addProductUseCase";
import { createCategoryUseCase } from "./useCases/createCategoryUseCase";

export const router = Router();
//Add Product
router.post("/products", addProductUseCase);

//create category
router.post("/categories", createCategoryUseCase);
