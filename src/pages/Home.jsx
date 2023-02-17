import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <main>
      <section>
        <h2>Home Page</h2>
      </section>
      <Link to="/detail">
        <Button variant="contained">Details</Button>
      </Link>
    </main>
  );
}
