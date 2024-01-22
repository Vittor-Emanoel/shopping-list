import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const productSchema = z.object({
  item: z.string(),
  // quantity: z.coerce.string(),
  // category: z.string(),
});

type ProductSchemaType = z.infer<typeof productSchema>;

export function useHomeController() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProductSchemaType>({
    resolver: zodResolver(productSchema),
  });

  return {
    errors,
    register,
    handleSubmit,
    control,
  };
}
