import { Footer } from "./components/footer";
import { NavigationBar } from "./components/header/navigation-bar";
import { ThemeProvider } from "./providers/theme-provider";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <NavigationBar />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
