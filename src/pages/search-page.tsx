import { searchData } from "@/api/search-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { isMovie } from "@/lib/is-movie";
import { ItemProps } from "@/types/data-types";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export function SearchPage() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<ItemProps[] | null>(null);

  const { mutate, data, isPending, isError } = useMutation({
    mutationFn: () => searchData(query),
    mutationKey: ["search", query],
    onSuccess: (data) => {
      setSearchResults(data.results);
      setQuery("");
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    mutate();
    setQuery("");
  };

  const isLoggedIn = Boolean(localStorage.getItem("guest_session_id"));

  if (!isLoggedIn) {
    return <p>You must be logged in to view this page</p>;
  }

  console.log(data);

  return (
    <main className="p-4 flex flex-col items-center">
      <form className="text-black flex gap-4 pb-4" onSubmit={handleSubmit}>
        <Input
          className="text-primary"
          type="search"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <Button type="submit" disabled={isPending} variant="destructive">
          {isPending ? "Searching..." : "Search"}
        </Button>
      </form>

      {isError && <p>An error occurred. Please try again.</p>}

      {searchResults && (
        <div>
          {searchResults.map((item: ItemProps) => (
            <div key={item.id}>
              <p>{isMovie(item) ? item.title : item.name}</p>
            </div>
          ))}
          {searchResults.length === 0 && <p>No results found</p>}
        </div>
      )}
    </main>
  );
}
