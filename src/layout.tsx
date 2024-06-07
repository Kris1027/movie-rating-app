import { Footer } from "./components/footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="p-4">{children}</main>
      <Footer />
    </>
  );
}
