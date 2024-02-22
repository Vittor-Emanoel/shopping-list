import { Plus } from "lucide-react";
import { ItemInput } from "../../components/ItemInput";
import { SelectCategory } from "../../components/SelectCategory";
import { SelectQuantity } from "../../components/SelectedQuantity";
import { ItemCard } from "../../components/itemCard";
import { Button } from "../../components/ui/button";
import cover from "../../imgs/cover.svg";

export function Home() {
  return (
    <>
      <div className="w-full text-gray-100 relative">
        <img
          src={cover}
          alt="cover image"
          className="max-w-full w-full object-cover max-md:object-left z-[-100] top-0  absolute h-[185px]"
        />

        <header className="container z-[100] pt-[88px]">
          <h1 className="font-bold text-2xl mb-7">Lista de Compras</h1>
          <form className="flex flex-col md:flex-row items-center max-md:justify-between gap-3 max-md:gap-3 max-w-full ">
            <ItemInput />
            <div className="flex gap-3 items-end max-w-full">
              <SelectQuantity />
              <SelectCategory />
              <Button
                type="submit"
                className="w-10 h-10 p-2 bg-purple hover:bg-purpleDark rounded-[999px] justify-center items-center gap-1.5 inline-flex md:mt-0"
              >
                <Plus />
              </Button>
            </div>
          </form>
        </header>
      </div>

      <div className="container flex flex-col gap-3 mt-10">
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </>
  );
}
