import { Schema, model } from "mongoose";

export const Product = model(
  "Product",
  new Schema({
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
    isSelected: {
      type: Boolean,
    },
  }),
);
