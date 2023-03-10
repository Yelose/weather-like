import { Grid, Typography } from "@mui/material";
import { centerAlign } from "../../../styles/styles";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function TempRanges() {
  return (
    <Grid container>
      <Grid item xs={6} sm={6} md={3} sx={centerAlign}>
        <Typography variant="body1" sx={centerAlign}>
          <WbSunnyIcon />
          Rise: 04:50 AM
        </Typography>
      </Grid>{" "}
      <Grid item xs={6} sm={6} md={3} sx={centerAlign}>
        <Typography variant="body1" sx={centerAlign}>
          <WbTwilightIcon />
          Set: 09:20 AM
        </Typography>
      </Grid>{" "}
      <Grid item xs={6} sm={6} md={3} sx={centerAlign}>
        <Typography variant="body1" sx={centerAlign}>
          <ArrowUpwardIcon />
          High: 21º
        </Typography>
      </Grid>{" "}
      <Grid item xs={6} sm={6} md={3} sx={centerAlign}>
        <Typography variant="body1" sx={centerAlign}>
          <ArrowDownwardIcon />
          Low: 17º
        </Typography>
      </Grid>
    </Grid>
  );
}
