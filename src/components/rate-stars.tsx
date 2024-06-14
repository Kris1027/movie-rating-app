import { Star } from "lucide-react";
import { useState } from "react";

export function RateStars({
  selected,
  setSelected,
}: {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex py-4">
      {new Array(10).fill(0).map((_, i) => (
        <Star
          key={i + 1}
          size={36}
          color={i + 1 <= (hovered || selected) ? "#009ffd" : "gray"}
          fill={i + 1 <= (hovered || selected) ? "#009ffd" : "none"}
          onMouseEnter={() => setHovered(i + 1)}
          onMouseLeave={() => setHovered(selected)}
          onClick={() => setSelected(i + 1)}
          className="cursor-pointer"
        />
      ))}
    </div>
  );
}
