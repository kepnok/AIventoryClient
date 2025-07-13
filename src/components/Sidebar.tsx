import { useNavigate } from "react-router-dom";
import { SidebarItem } from "./SidebarItem"; // assume this is your pre-built item component

export function Sidebar() {
//  const navigate = useNavigate();

  return (
    <div className="w-60 min-h-screen bg-white shadow-md p-6 flex flex-col">
      <div className="text-2xl font-bold text-gray-800 mb-6">AIventory</div>

      <div className="flex flex-col gap-2">
        <SidebarItem
          text="Dashboard"
         // onClick={() => navigate("/dashboard")}
        />
        <SidebarItem
          text="Chat"
          //onClick={() => navigate("/chat")}
        />
      </div>
    </div>
  );
}
