import React, { useState, useEffect } from "react";
import LoginPage from "./components/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import { users } from "./data/users";

function App() {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("authUser");
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("authUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("authUser");
    }
  }, [user]);

  const handleLogin = (username, password) => {
    const matched = users.find(
      (u) => u.username === username && u.password === password
    );
    if (matched) {
      setUser(matched);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setUser(null);
    window.history.pushState({}, document.title, window.location.pathname);
  };

  return <>{user ? <DashboardPage user={user} onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />}</>;
}

export default App;
