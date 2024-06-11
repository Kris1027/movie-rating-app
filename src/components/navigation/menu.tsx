import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";

const pages = [
  { title: "Home", href: "/" },
  { title: "Login", href: "/login" },
  { title: "Movies", href: "/movie" },
  { title: "Series", href: "/tv" },
  { title: "Rated", href: "/rated" },
];

export function Menu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {pages.map((page) => (
          <NavigationMenuItem key={page.href}>
            <Link className={navigationMenuTriggerStyle()} to={page.href}>
              {page.title}
            </Link>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
