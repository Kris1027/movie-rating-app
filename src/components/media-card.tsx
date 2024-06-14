import { isMovie } from "@/lib/is-movie";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  ContentTypeProps,
  ItemProps,
  RatedContentTypeProps,
} from "@/types/data-types";
import { IMAGE_URL } from "@/lib/constants";
import { Button } from "./ui/button";
import { useMutation } from "@tanstack/react-query";
import { addRating } from "@/api/add-rating";
import { useState } from "react";

export function MediaCard({
  item,
  contentType,
}: {
  item: ItemProps;
  contentType: ContentTypeProps | RatedContentTypeProps;
}) {
  const [rating, setRating] = useState(0);

  const mutation = useMutation({
    mutationFn: () => {
      return addRating(contentType, item.id, rating);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <Card>
      <CardHeader>
        <img
          src={`${IMAGE_URL}/${item.poster_path}`}
          alt={isMovie(item) ? item.title : item.name}
          width={200}
          height={300}
        />
      </CardHeader>
      <CardTitle>{isMovie(item) ? item.title : item.name}</CardTitle>
      <CardContent>
        {!item.rating && (
          <form onSubmit={handleSubmit} className="flex flex-col text-black">
            <input
              type="number"
              min={1}
              max={10}
              onChange={(e) => setRating(Number(e.target.value))}
            />
            <Button>Add Rating</Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
