import { Request, Response } from "express";
import { z } from "zod";
import { Product } from "../models/Product";

const schema = z.object({
  name: z.string(),
  quantity: z.number(),
  category: z.string(),
  isSelected: z.boolean(),
});

export async function addProductUseCase(req: Request, res: Response) {
  try {
    const { category, name, quantity, isSelected } = schema.parse(req.body);

    const product = await Product.create({
      category,
      name,
      quantity: Number(quantity),
      isSelected,
    });

    return res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
