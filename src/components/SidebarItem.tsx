import { type ReactElement } from "react";

interface SidebarItemProps {
  text: string;
  icon?: ReactElement;
  onClick?: () => void;
}

export function SidebarItem({ text, icon, onClick }: SidebarItemProps) {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-1 px-5 py-2 cursor-pointer text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-colors"
    >
      {icon && <div className="w-5 h-5">{icon}</div>}
      <span>{text}</span>
    </div>
  );
}
