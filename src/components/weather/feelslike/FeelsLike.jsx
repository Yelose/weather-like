import { Grid, Typography } from "@mui/material";
import { centerAlign } from "../../../styles/styles";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import AirIcon from "@mui/icons-material/Air";

export default function FeelsLike() {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} sx={centerAlign}>
        <Typography variant="body1" sx={centerAlign}>
          <DeviceThermostatIcon color="primary" />
          Real feel: <span> 18º</span>
        </Typography>
      </Grid>{" "}
      <Grid item xs={12} sm={12} md={12} sx={centerAlign}>
        <Typography variant="body1" sx={centerAlign}>
          <InvertColorsIcon color="primary" />
          Humidity: <span> 15%</span>
        </Typography>
      </Grid>{" "}
      <Grid item xs={12} sm={12} md={12} sx={centerAlign}>
        <Typography variant="body1" sx={centerAlign}>
          <AirIcon color="primary" />
          Wind: <span> 3km/h</span>
        </Typography>
      </Grid>
    </Grid>
  );
}
