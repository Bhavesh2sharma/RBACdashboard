import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { permissions } from "../permissions";
import TextEditor from "../components/TextEditor";

const DashboardPage = ({ user, onLogout }) => {
  const [activeFeature, setActiveFeature] = useState(null);

  const renderContent = () => {
    switch (activeFeature) {
      case "create":
        return <div>Create new projects here</div>;
      case "dashboard":
        return <div>Full access dashboard view</div>;
      case "dashboardView":
        return <div>Read-only dashboard</div>;
      case "settings":
        return <div>Project settings controls</div>;
      case "invite":
        return <div>Invite/Remove team members</div>;
      case "edit":
        return <TextEditor />;
      case "upload":
        return <div>Upload documents section</div>;
      default:
        return <div>Select a feature from sidebar</div>;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar role={user.role} onSelect={setActiveFeature} onLogout={onLogout} />
      <div className="flex-1">
        <Header username={user.username} role={user.role} />
        <div className="p-6">{renderContent()}</div>
      </div>
    </div>
  );
};

export default DashboardPage;