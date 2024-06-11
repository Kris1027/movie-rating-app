import { Star, X } from "lucide-react";
import { RateStars } from "./rate-stars";
import { contentTypes, movieProps, seriesProps } from "@/types/content-types";
import { Heading } from "./ui/heading";
import { Button } from "./ui/button";
import { useState } from "react";

export function RateModal({
  c,
  contentType,
  setShowModal,
  showModal,
}: {
  c: movieProps | seriesProps;
  contentType: contentTypes;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
}) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex justify-center items-center fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-50">
      <div className="bg-secondary px-48 pt-20 pb-10 rounded-md text-center relative">
        <div className="absolute -top-10 right-0">
          <Button variant="ghost" onClick={() => setShowModal(!showModal)}>
            <X />
          </Button>
        </div>
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <Star color="#2d7dd2" fill="#2d7dd2" size={128} />
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl">
            {selected ? selected : "?"}
          </p>
        </div>
        <div>
          <p className="uppercase text-[#facc15] font-bold">rate this</p>
          <Heading>
            {contentType === "movies"
              ? (c as movieProps).title
              : (c as seriesProps).name}
          </Heading>
        </div>
        <div>
          <RateStars selected={selected} setSelected={setSelected} />
        </div>
        <div>
          <Button className="w-full">Rate</Button>
        </div>
      </div>
    </div>
  );
}
