import { ThemeProvider } from "@/providers/theme-provider";
import { Outlet } from "react-router-dom";
import { NavigationBar } from "./navigation/navigation-bar";
import { Footer } from "./footer";
import { Wrapper } from "./Wrapper";

export function Layout() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <NavigationBar />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </ThemeProvider>
  );
}
