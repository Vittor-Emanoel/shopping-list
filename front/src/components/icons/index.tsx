import { iconsMap } from "./iconsMap";

interface CategoryTypeIconProps {
  type: keyof typeof iconsMap;
  color?: string;
}

export function CategoryTypeIcon({ type, color }: CategoryTypeIconProps) {
  const Icon = iconsMap[type];

  return <Icon color={color} />;
}
