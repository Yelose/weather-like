import { Grid } from "@mui/material";
import CurrentWeather from "../../components/weather/current/CurrentWeather";
import TempRanges from "../../components/weather/ranges/TempRanges";
import Forecast from "../../components/weather/forecasat/Forecast";
import { useState, useEffect } from "react";
import getFormattedWeatherData from "../../services/weatherService";
import citySlice from "../../store/city";
import { configureStore } from "@reduxjs/toolkit";

export default function Detail() {
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const store = configureStore({
    reducer: citySlice,
  });

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  return (
    <Grid container spacing={2} sx={{ padding: "10px 0" }}>
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
