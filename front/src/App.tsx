import { Plus } from "lucide-react";
import { ItemInput } from "./components/ItemInput";
import { SelectCategory } from "./components/SelectCategory";
import { SelectedQuantity } from "./components/SelectedQuantity";
import { Button } from "./components/ui/button";
import cover from "./imgs/cover.svg";

export function App() {
  return (
    <div className="w-full text-gray-100 relative ">
      <div>
        <img src={cover} alt="cover image" />
      </div>
      <div className="container absolute right-0 left-0 top-[76px] ">
        <header>
          <h1 className="font-bold text-2xl mb-8">Lista de Compras</h1>
          <form className="flex items-center justify-between gap-3">
            <ItemInput />
            <SelectedQuantity />
            <SelectCategory />

            <Button className="w-10 h-10 p-2 bg-purple hover:bg-purpleDark rounded-[999px] justify-center items-center gap-1.5 inline-flex mt-4">
              <Plus />
            </Button>
          </form>
        </header>
      </div>
    </div>
  );
}
