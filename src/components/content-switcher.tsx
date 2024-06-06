import { Button } from "./ui/button";

type ContentSwitcherProps = {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
};

export function ContentSwitcher({ toggle, setToggle }: ContentSwitcherProps) {
  return (
    <div>
      <div>
        <Button
          variant={toggle ? "destructive" : "default"}
          size="lg"
          onClick={() => setToggle(true)}
        >
          Movies
        </Button>
        <Button
          size="lg"
          variant={toggle ? "default" : "destructive"}
          onClick={() => setToggle(false)}
        >
          Series
        </Button>
      </div>
      <div className="p-4">
        <h2 className="text-3xl font-bold">
          {toggle
            ? "Welcome to Our Cinematic Oasis!"
            : "Welcome to Our Series Sanctuary!"}
        </h2>
        <p className="text-lg italic">
          {toggle
            ? "Discover the Latest and Most Popular Movies That Have Captivated Audiences Worldwide! Browse, Watch, and Enjoy the Biggest Hits in Cinema!"
            : "Discover the Latest and Most Popular TV Shows That Have Captivated Audiences Worldwide! Browse, Watch, and Enjoy the Biggest  Hits in Television!"}
        </p>
      </div>
    </div>
  );
}
