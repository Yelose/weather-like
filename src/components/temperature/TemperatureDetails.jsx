import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import {
  formatToLocalTime,
  iconUrlFromCode,
} from "../../services/weatherService";
import { blue } from "@mui/material/colors";

import ThermostatIcon from "@mui/icons-material/Thermostat";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import AirIcon from "@mui/icons-material/Air";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";

export const TemperatureDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) => {
  const flexColumnCenter = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  const flexAlignCenter = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1vw",
    padding: "5px 10px",
  };
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sm={6} md={12} sx={flexColumnCenter}>
          <Typography variant="h4">{details}</Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={4} sx={flexColumnCenter}>
          <img src={iconUrlFromCode(icon)} />
        </Grid>
        <Grid item xs={6} sm={6} md={4} sx={flexColumnCenter}>
          <Typography color="secondary" variant="h3">
            {temp.toFixed()}º
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={flexColumnCenter}>
          <Container sx={flexAlignCenter}>
            <ThermostatIcon color="primary" />
            <Typography variant="body1">
              Real feel {feels_like.toFixed()}º
            </Typography>
          </Container>
          <Container sx={flexAlignCenter}>
            <InvertColorsIcon color="primary" />
            <Typography variant="body1">
              Humidity {humidity.toFixed()}%
            </Typography>
          </Container>
          <Container sx={flexAlignCenter}>
            <AirIcon color="primary" />
            <Typography variant="body1">Wind {speed.toFixed()} km/h</Typography>
          </Container>
        </Grid>
        <Grid container sx={{ backgroundColor: blue[50] }}>
          <Grid item xs={12} sm={6} md={3} sx={flexAlignCenter}>
            <WbSunnyIcon sx={{ color: "orange" }} />
            <Typography>
              Rise: {formatToLocalTime(sunrise, timezone, "hh:mm a")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={flexAlignCenter}>
            <WbTwilightIcon sx={{ color: "orange" }} />
            <Typography>
              Set: {formatToLocalTime(sunset, timezone, "hh:mm a")}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={flexAlignCenter}>
            <WbSunnyIcon color="primary" />
            <Typography>Min: {temp_min}º</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={flexAlignCenter}>
            <WbSunnyIcon color="primary" />
            <Typography>Max: {temp_max}º</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid></Grid>
    </Box>
  );
};
