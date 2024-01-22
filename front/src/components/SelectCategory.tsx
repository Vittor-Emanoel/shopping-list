import { categories } from "../utils/categories";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function SelectCategory() {
  return (
    <div className="flex flex-col gap-2 w-[168px] group">
      <Label
        htmlFor="category"
        className="text-xs text-base-gray_200 leading-3 tracking-tight transition-colors duration-300"
      >
        <p>Categoria</p>
      </Label>
      <Select name="category">
        <SelectTrigger className="bg-base-gray_500 rounded-md border-base-gray_300 p-3 focus:border-purple">
          <SelectValue
            placeholder="Selecione"
            className="text-base-gray_200 tracking-wide leading-none"
          />
        </SelectTrigger>
        <SelectContent
          position="popper"
          className=" text-base-gray_200 bg-base-gray_500 rounded-sm border border-neutral-800 "
        >
          <SelectGroup>
            {categories.map((category) => (
              <SelectItem
                key={category.id}
                value={category.name}
                className="border-b border-neutral-800 hover:text-white "
                icon={category.icon}
                color={category.color}
              >
                {category.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
