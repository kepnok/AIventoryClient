import { useNavigate } from "react-router-dom";
import { SidebarItem } from "./SidebarItem"; // assume this is your pre-built item component
import { DashboardIcon } from "../icons/DashboardIcon";
import { ChatIcon } from "../icons/ChatIcon";

export function Sidebar() {
//  const navigate = useNavigate();

  return (
    <div className="w-60 min-h-screen bg-white shadow-md p-6 flex flex-col">
      <div className="text-2xl font-bold text-blue-600 mb-6">AIventory</div>

      <div className="flex flex-col gap-2">
        <SidebarItem
          text="Dashboard"
		  icon={<DashboardIcon />}
         // onClick={() => navigate("/dashboard")}
        />
        <SidebarItem
          text="Chat"
		  icon={<ChatIcon />}
          //onClick={() => navigate("/chat")}
        />
      </div>
    </div>
  );
}
