import { ContentSwitcher } from "@/components/content-switcher";
import { Movies } from "@/components/movies/movies";
import { Series } from "@/components/series/series";
import { useState } from "react";

export function HomePage() {
  const [toggle, setToggle] = useState(true);

  return (
    <main className="p-4 text-center">
      <ContentSwitcher toggle={toggle} setToggle={setToggle} />
      {toggle && <Movies />}
      {!toggle && <Series />}
    </main>
  );
}
