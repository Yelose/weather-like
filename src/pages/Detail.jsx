import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
export default function Detail() {
  return (
    <main>
      <section>
        <h2>Detail</h2>
      </section>
      <Link to="/">
        <Button
          sx={{
            backgroundColor: "secondary.dark",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.9, 0.9],
            },
            color: "white",
          }}
          variant="contained"
        >
          <KeyboardReturnIcon />
          Back
        </Button>
      </Link>
    </main>
  );
}
