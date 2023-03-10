import { Box } from "@mui/system";
import { blue } from "@mui/material/colors";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: blue[900], color: "white" }}>
      <footer className="footer-container">
        <figure>
          <img
            src="https://avatars.githubusercontent.com/u/56456756?s=96&v=4"
            alt="imagen de dibujos de Yelose"
          />
        </figure>
        <div>
          <p>This app was made by Yelose</p>
          <p>
            Background images from <a href="pixnio.com">pixnio.com</a> free
            licence.
          </p>
        </div>
      </footer>
    </Box>
  );
}
