import { ThemeProvider } from "@/providers/theme-provider";
import { Outlet } from "react-router-dom";
import { NavigationBar } from "../components/navigation/navigation-bar";
import { Footer } from "../components/footer";

export function MainLayout() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <NavigationBar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}