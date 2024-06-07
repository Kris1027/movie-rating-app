import { Footer } from "./components/footer";
import { NavigationBar } from "./components/header/navigation-bar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
}
