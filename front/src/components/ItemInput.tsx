import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function ItemInput() {
  return (
    <div className="w-full space-y-2 group ">
      <Label
        htmlFor="itemName"
        className="text-xs text-base-gray_200 leading-3 tracking-tight transition-colors duration-300"
      >
        <p>Item</p>
      </Label>

      <Input
        type="text"
        className="bg-base-gray_500 border-base-gray_300 focus:border-purple px-3 py-2 transition-all duration-300 focus:outline-none"
        id="itemName"
      />
    </div>
  );
}
