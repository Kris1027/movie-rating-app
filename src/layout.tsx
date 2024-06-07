import { Footer } from "./components/footer";
import { Navigation } from "./components/navigation/navigation";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
