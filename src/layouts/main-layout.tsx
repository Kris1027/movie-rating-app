import { ThemeProvider } from "@/providers/theme-provider";
import { Outlet } from "react-router-dom";
import { NavigationBar } from "../components/navigation/navigation-bar";
import { Footer } from "../components/footer";

export function MainLayout() {
  const isLoggedIn: boolean = !!localStorage.getItem("guest_session_id");

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <NavigationBar />
      {isLoggedIn ? (
        <Outlet />
      ) : (
        <div className="flex justify-center items-center h-[calc(100vh-200px)]">
          <p className="text-xl">You must be logged in to view this page</p>
        </div>
      )}
      <Footer />
    </ThemeProvider>
  );
}
