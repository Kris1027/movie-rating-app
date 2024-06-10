import { useLoaderData } from "react-router-dom";

export function ContentDetailsPage() {
  const data = useLoaderData();

  console.log(data);

  return <div>Content Details</div>;
}
