import React, { useState } from "react";
import { permissions } from "../permissions";
import { ChevronLeft, ChevronRight, LogOut } from "lucide-react";

const Sidebar = ({ role, onSelect, onLogout }) => {
  const [collapsed, setCollapsed] = useState(false);

  const actions = [
    { key: "create", label: "Create Project" },
    { key: "dashboard", label: "Access Dashboard" },
    { key: "dashboardView", label: "View Dashboard" },
    { key: "settings", label: "Project Settings" },
    { key: "invite", label: "Invite/Remove Users" },
    { key: "edit", label: "Edit Project" },
    { key: "upload", label: "Upload Documents" },
  ];

  const allowed = permissions[role] || [];

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-60"
      } bg-white border-r p-4 shadow-md h-screen flex flex-col justify-between transition-all duration-300`}
    >
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-lg font-bold ${collapsed ? "hidden" : "block"}`}>Actions</h2>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-600 hover:text-blue-500"
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </button>
        </div>
        <ul className="space-y-2">
          {actions
            .filter((action) => allowed.includes(action.key))
            .map((action) => (
              <li key={action.key}>
                <button
                  className="w-full text-left px-3 py-2 rounded hover:bg-blue-100 text-gray-800"
                  onClick={() => onSelect(action.key)}
                >
                  {collapsed ? action.label.charAt(0) : action.label}
                </button>
              </li>
            ))}
        </ul>
      </div>

      <button
        onClick={onLogout}
        className="flex items-center justify-center gap-2 mt-6 text-red-600 hover:text-red-800 px-2 py-2 border-t border-gray-200"
      >
        <LogOut size={collapsed ? 18 : 20} />
        {!collapsed && <span>Logout</span>}
      </button>
    </div>
  );
};

export default Sidebar;