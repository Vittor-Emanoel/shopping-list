import { MoreVertical } from "lucide-react";
import { CategoryTypeIcon } from "./icons";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";

export function ItemCard() {
  return (
    <Card className=" p-4 flex justify-between border-none h-16 bg-base-gray_400 text-base-gray_100">
      <div className="flex items-center gap-4">
        <Checkbox className="border-purple border-2  data-[state=unchecked]:bg-purpleDark data-[state=checked]:bg-feedback-success data-[state=checked]:border-none data-[state=checked]:hover:bg-feedback-success_light transition-colors" />
        <div className="flex flex-col">
          <h2 className="text-sm font-bold">Maça</h2>
          <p className="text-base-gray_200 text-xs">2 Unidades</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 py-2 px-4 bg-others-orange_dark text-others-orange rounded-[999px]">
          <CategoryTypeIcon type="Apple" />
          <h2 className="text-xs font-semibold leading-none">Fruta</h2>
        </div>
        <MoreVertical className="cursor-pointer w-5 h-5 text-purpleLight" />
      </div>
    </Card>
  );
}
