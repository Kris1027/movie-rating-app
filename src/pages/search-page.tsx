import { searchData } from "@/api/search-data";
import { Button } from "@/components/ui/button";
import { isMovie } from "@/lib/is-movie";
import { ItemProps } from "@/types/data-types";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export function SearchPage() {
  const [query, setQuery] = useState("");

  const mutation = useMutation({
    mutationFn: () => searchData(query),
    mutationKey: ["search-data", query],
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    mutation.mutate();
  };

  const isLoggedIn: boolean = !!localStorage.getItem("guest_session_id");
  if (!isLoggedIn) {
    return <p>You must be logged in to view this page</p>;
  }

  return (
    <div>
      <h1>Search Page</h1>
      <form className="text-black" onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <Button type="submit">Search</Button>
      </form>

      {mutation.data && (
        <div>
          {mutation.data?.results?.map((item: ItemProps) => (
            <p key={item.id}>{isMovie(item) ? item.title : item.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}
