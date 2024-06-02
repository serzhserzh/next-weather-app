import { icons } from "lucide-react";

const Icon = ({ name, size }: { name: keyof typeof icons; size: string }) => {
  const LucideIcon = icons[name];

  return <LucideIcon size={size} />;
};

export default Icon;
