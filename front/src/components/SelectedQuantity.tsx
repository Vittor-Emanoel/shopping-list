import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function SelectedQuantity() {
  return (
    <div className="flex flex-col gap-2 w-[180px]">
      <label className="text-xs text-base-gray_200 leading-3 tracking-tight">
        Quantidade
      </label>
      <div className="flex ">
        <Select>
          <Input
            type="number"
            className="w-[88px] rounded-none bg-base-gray_500 rounded-tl-md rounded-bl-md border-neutral-800"
            min={1}
            max={99}
          />
          <SelectTrigger className="border-base-gray_300 bg-base-gray_400 rounded-tr-md rounded-br-md ">
            <SelectValue placeholder="Uni" />
          </SelectTrigger>
          <SelectContent className=" w-20 text-base-gray_200 bg-base-gray_500 rounded-sm border border-neutral-800 ">
            <SelectGroup>
              <SelectItem
                value="vavdrwrwd"
                className="border-b border-neutral-800 p-3"
              >
                Uni
              </SelectItem>
              <SelectItem
                value="vavdd"
                className="border-b border-neutral-800 p-3"
              >
                L
              </SelectItem>
              <SelectItem value="vav" className=" border-neutral-800 p-3">
                G
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
