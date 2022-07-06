import { Link } from "react-router-dom";

let usuario = "lorem";

export function UsersPage() {
  return (
    <>
      <h1>Users | Users Page</h1>
      <Link className="text-decoration-none fs-3" to={`/users/${usuario}`}>
        Go to user page {usuario}
      </Link>
    </>
  );
}
