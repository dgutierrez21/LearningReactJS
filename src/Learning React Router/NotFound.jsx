import { Link } from "react-router-dom";

export function NotFoundPage() {

  return (
    <div className="container">
      <h1 className="text-danger fw-bold mt-3">4 0 4</h1>
      <h2 className="text-danger fw-bold fs-1">Page Not Found</h2>
      <h2 className="text-danger fw-light">
        We couldn't find what you were looking for.
      </h2>
      <Link className="btn btn-primary mt-3" to="/">
        HOME
      </Link>
    </div>
  );
}
// https://youtu.be/7xRVnmWcTE8