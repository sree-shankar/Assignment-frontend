import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { apiUsage, userProfile } from "./data/apiData";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const savedLogin = localStorage.getItem("isLoggedIn");
    if (savedLogin === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <ThemeProvider theme={theme}>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <Navbar onLogout={handleLogout} />
          <Dashboard profile={userProfile} data={apiUsage} />
        </>
      )}
    </ThemeProvider>
  );
}
