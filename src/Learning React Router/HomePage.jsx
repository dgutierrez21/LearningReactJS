import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <h1>Home | Learning React Router</h1>
      <Link className="text-decoration-none fs-3" to="/contact">
        Go to Contact Page
      </Link>
    </>
  );
}
// https://youtu.be/7xRVnmWcTE8

// https://reactrouter.com/