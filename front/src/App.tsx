import { Select, SelectContent, SelectTrigger } from "@radix-ui/react-select";
import { Input } from "./components/ui/input";
import { SelectItem } from "./components/ui/select";
import cover from "./imgs/cover.svg";

export function App() {
  return (
    <div className="w-full text-white relative">
      <div>
        <img src={cover} alt="cover image" />
      </div>
      <div className="container absolute right-0 left-0 top-[76px]">
        <header>
          <h1 className="text-gray-100 font-bold text-2xl mb-8">
            Lista de Compras
          </h1>

          <form action="" className="flex bo">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-base-gray_200 font-normal leading-3 tracking-tight">
                Item
              </label>
              <Input
                type="text"
                className="bg-base-gray_500 border-base-gray_300 "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-base-gray_200 font-normal leading-3 tracking-tight">
                Quantidade
              </label>
              <div className="flex ">
                <Input
                  type="text"
                  className="bg-base-gray_500 border-base-gray_300 "
                />
                <Select>
                  <SelectTrigger className="w-[72px] h-10 p-3 bg-zinc-900 border-purple border-2 rounded-tr-md rounded-br-md  justify-start items-center gap-2 inline-flex"></SelectTrigger>
                  <SelectContent
                    position="popper"
                    className=" text-center bg-base-gray_500 rounded border border-neutral-800 "
                  >
                    <SelectItem
                      value="vavdd"
                      className="border-b border-neutral-800 "
                    >
                      Uni .
                    </SelectItem>
                    <SelectItem
                      value="vavdd"
                      className="border-b border-neutral-800 "
                    >
                      L
                    </SelectItem>
                    <SelectItem value="vav">G</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </header>
      </div>
    </div>
  );
}
