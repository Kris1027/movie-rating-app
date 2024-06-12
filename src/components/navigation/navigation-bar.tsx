import { LoginPage } from "@/pages/login-page";
import { Logo } from "./logo";
import { Menu } from "./menu";
import { ModeToggle } from "./mode-toggle";

export function NavigationBar() {
  return (
    <header className="flex justify-between p-4 text-primary bg-primary-foreground">
      <Logo />
      <div className="flex gap-10">
        <Menu />
        <LoginPage />
        <ModeToggle />
      </div>
    </header>
  );
}
