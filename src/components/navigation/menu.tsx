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
  { title: "Movies", href: "/movies" },
  { title: "Series", href: "/series" },
  { title: "Rated", href: "/rated" },
];

export function Menu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {pages.map((page) => (
          <NavigationMenuItem>
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
