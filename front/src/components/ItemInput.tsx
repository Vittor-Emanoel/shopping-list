import { Input } from "./ui/input";

export function ItemInput() {
  return (
    <div className="flex flex-col gap-2 w-[316px]">
      <label className="text-xs text-base-gray_200 leading-3 tracking-tight">
        Item
      </label>
      <Input
        type="text"
        className="bg-base-gray_500 border-base-gray_300 focus:border-purple"
      />
    </div>
  );
}
