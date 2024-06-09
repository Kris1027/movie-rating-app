import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/">
      <h1 className="text-3xl font-bold">📽️ Movie Rating App</h1>
    </Link>
  );
}
