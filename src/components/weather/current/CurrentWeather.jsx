import { Grid, Typography } from "@mui/material";
import { centerAlign } from "../../../styles/styles";
import FeelsLike from "../feelslike/FeelsLike";

export default function CurrentWeather() {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} sx={centerAlign}>
        <Typography color="primary" variant="h4">
          Berlin, DE
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} sx={centerAlign}>
        <Typography color="secondary" variant="body2">
          Clear
        </Typography>
      </Grid>
      <Grid item xs={6} sm={4} md={4} sx={centerAlign}>
        <figure>
          <img
            width={60}
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="clear"
          />
        </figure>
      </Grid>
      <Grid item xs={6} sm={4} md={4} sx={centerAlign}>
        <Typography color="primary" variant="h3">
          19º
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} md={4} sx={centerAlign}>
        <FeelsLike />
      </Grid>
    </Grid>
  );
}
