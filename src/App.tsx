import { useState } from "react";
import { Movies } from "./components/movies/movies";
import { Series } from "./components/series/series";
import { Button } from "./components/ui/button";

export default function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <main className="p-4 text-center">
      <div>
        <div>
          <Button
            className="uppercase"
            variant={toggle ? "destructive" : "default"}
            onClick={() => setToggle(true)}
          >
            Movies
          </Button>
          <Button
            className="uppercase"
            variant={toggle ? "default" : "destructive"}
            onClick={() => setToggle(false)}
          >
            Series
          </Button>
        </div>
        <h2>
          {toggle
            ? "Welcome to Our Cinematic Oasis!"
            : "Welcome to Our Series Sanctuary!"}
        </h2>
        <p>
          {toggle
            ? "Discover the Latest and Most Popular Movies That Have Captivated Audiences Worldwide! Browse, Watch, and Enjoy the Biggest Hits in Cinema!"
            : "Discover the Latest and Most Popular TV Shows That Have Captivated Audiences Worldwide! Browse, Watch, and Enjoy the Biggest  Hits in Television!"}
        </p>
      </div>
      {toggle && <Movies />}
      {!toggle && <Series />}
    </main>
  );
}
