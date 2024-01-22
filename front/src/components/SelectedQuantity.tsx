import { useHomeController } from "../pages/home/useHomeController";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function SelectQuantity() {
  const { register } = useHomeController();

  return (
    <div className="flex flex-col gap-2 max-w-[180px]  group">
      <Label
        htmlFor="quantity"
        className="text-xs text-base-gray_200 leading-3 tracking-tight transition-colors duration-300"
      >
        <p>Quantidade</p>
      </Label>
      <div className="flex">
        <Select>
          <Input
            id="quantity"
            type="number"
            className="w-[88px] max-md:w-[66px] rounded-none bg-base-gray_500 rounded-tl-md rounded-bl-md border-neutral-800"
            min={1}
            max={99}
            {...register("quantity")}
          />
          <SelectTrigger className="max-md:w-[72px] border-base-gray_300 bg-base-gray_400 rounded-tr-md rounded-br-md ">
            <SelectValue placeholder="Uni" />
          </SelectTrigger>
          <SelectContent className="max-md:w-[72px] text-white bg-base-gray_500 rounded-sm border border-neutral-800 ">
            <SelectGroup>
              <SelectItem
                key={21}
                value="vavdrwrwd"
                className="border-b border-base-gray_300 p-3 text-sm"
              >
                Uni
              </SelectItem>
              <SelectItem
                key={214}
                value="vavdd"
                className="border-b border-base-gray_300 p-3"
              >
                L
              </SelectItem>
              <SelectItem
                key={21423}
                value="vav"
                className="border-b border-base-gray_300 p-3"
              >
                G
              </SelectItem>
              <SelectItem
                key={21432432}
                value="adwadawda"
                className=" border-base-gray_300 p-3"
              >
                K
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
