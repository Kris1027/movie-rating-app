import { searchData } from "@/api/search-data";
import { Button } from "@/components/ui/button";
import { isMovie } from "@/lib/is-movie";
import { ItemProps } from "@/types/data-types";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export function SearchPage() {
  const [query, setQuery] = useState("");

  const { mutate, data, isPending, isError } = useMutation({
    mutationFn: () => searchData(query),
    mutationKey: ["search", query],
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    mutate();
  };

  const isLoggedIn = Boolean(localStorage.getItem("guest_session_id"));

  if (!isLoggedIn) {
    return <p>You must be logged in to view this page</p>;
  }

  return (
    <main>
      <form className="text-black" onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Searching..." : "Search"}
        </Button>
      </form>

      {isError && <p>An error occurred. Please try again.</p>}

      {data && (
        <div>
          {data?.results?.map((item: ItemProps) => (
            <p key={item.id}>{isMovie(item) ? item.title : item.name}</p>
          ))}
        </div>
      )}
    </main>
  );
}
