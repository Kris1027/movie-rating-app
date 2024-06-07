import { Logo } from "./logo";
import { Menu } from "./menu";

export function NavigationBar() {
  return (
    <header className="flex justify-between p-4 text-primary bg-primary-foreground">
      <Logo />
      <Menu />
    </header>
  );
}
