import { Request, Response } from "express";
import { z } from "zod";
import { Category } from "../models/Category";

const schema = z.object({
  name: z.string(),
  icon: z.string(),
});

export async function createCategoryUseCase(req: Request, res: Response) {
  try {
    const { name, icon } = schema.parse(req.body);

    const category = await Category.create({
      name,
      icon,
    });

    return res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
