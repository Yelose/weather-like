import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main>
      <h1>Error 404</h1>
      <p>This page doesn't exist.</p>
      <button>
        <Link to="/">Home</Link>
      </button>
    </main>
  );
}
