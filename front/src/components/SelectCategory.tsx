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
    <div className="flex flex-col gap-2 w-[168px]">
      <label className="text-xs text-base-gray_200 leading-3 tracking-tight">
        Categoria
      </label>
      <Select>
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
            <SelectItem
              value="vavdrwrwd"
              className="border-b border-neutral-800 "
            >
              Frutas
            </SelectItem>
            <SelectItem value="vavdd" className="border-b border-neutral-800 ">
              Legumes
            </SelectItem>
            <SelectItem value="vav">Outros</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
