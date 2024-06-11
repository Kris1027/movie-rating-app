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
      {new Array(10)
        .fill(0)
        .map((_, i) => i + 1)
        .map((i) => (
          <Star
            key={i}
            size={36}
            color={i <= (hovered || selected) ? "#2d7dd2" : "gray"}
            fill={i <= (hovered || selected) ? "#2d7dd2" : "none"}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(selected)}
            onClick={() => setSelected(i)}
            className="cursor-pointer"
          />
        ))}
    </div>
  );
}
