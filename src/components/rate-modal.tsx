import { Star } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  ContentTypeProps,
  ItemProps,
  RatedContentTypeProps,
} from "@/types/data-types";
import { isMovie } from "@/lib/is-movie";
import { RateStars } from "./rate-stars";
import { Button } from "./ui/button";
import { starSize } from "@/lib/star-size";
import { useMutation } from "@tanstack/react-query";
import { addRating } from "@/api/add-rating";

export function RateModal({
  item,
  contentType,
}: {
  item: ItemProps;
  contentType: ContentTypeProps | RatedContentTypeProps;
}) {
  const [rating, setRating] = useState<number>(0);
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const mutation = useMutation({
    mutationFn: () => addRating(contentType, item.id, rating),
    onSuccess: () => {
      setIsOpen(false);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRating(selected);
    mutation.mutate();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" onClick={() => setIsOpen(true)}>
          <Star color="#009ffd" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col items-center">
          <div>
            <Star
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              color="#009ffd"
              fill="#009ffd"
              size={starSize(selected)}
            />
            <p className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
              {selected}
            </p>
          </div>
          <p className="uppercase font-bold text-[#fcab10] pt-12">Rate this</p>
          <DialogTitle className="text-3xl">
            {isMovie(item) ? item.title : item.name}
          </DialogTitle>
          <RateStars selected={selected} setSelected={setSelected} />
          <form onSubmit={handleSubmit}>
            <Button type="submit">Rate</Button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
