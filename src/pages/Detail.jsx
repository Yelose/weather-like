import TimeAndLocation from "../components/time-location/TimeAndLocation";
import { Grid } from "@mui/material";
import CurrentWeather from "../components/weather/current/CurrentWeather";
import TempRanges from "../components/weather/ranges/TempRanges";
import Forecast from "../components/weather/forecasat/Forecast";

export default function Detail() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
        <TimeAndLocation />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <CurrentWeather />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <TempRanges />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Forecast title="Hourly Forecast" />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Forecast title="Daily Forecast" />
      </Grid>
    </Grid>
  );
}
