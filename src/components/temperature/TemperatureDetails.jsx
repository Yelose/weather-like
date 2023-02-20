import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import {
  formatToLocalTime,
  iconUrlFromCode,
} from "../../services/weatherService";
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
    gap: ".5vh",
  };
  const flexAlignCenter = {
    display: "flex",
    alignItems: "center",
    gap: "1vw",
  };
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={12} sx={flexColumnCenter}>
          <Typography variant="h4">{details}</Typography>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={4} sx={flexColumnCenter}>
            <img src={iconUrlFromCode(icon)} />
          </Grid>
          <Grid item xs={12} md={4} sx={flexColumnCenter}>
            <Typography color="secondary" variant="h3">
              {temp.toFixed()}º
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={flexColumnCenter}>
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
              <Typography variant="body1">
                Wind {speed.toFixed()} km/h
              </Typography>
            </Container>
          </Grid>
        </Grid>
        <Grid container>
          <Grid container>
            <Grid item xs={6} md={3} sx={flexAlignCenter}>
              <WbSunnyIcon sx={{ color: "orange" }} />
              <Typography>
                Rise: {formatToLocalTime(sunrise, timezone, "hh:mm a")}
              </Typography>
            </Grid>
            <Grid item xs={6} md={3} sx={flexAlignCenter}>
              <WbTwilightIcon sx={{ color: "orange" }} />
              <Typography>
                Set: {formatToLocalTime(sunset, timezone, "hh:mm a")}
              </Typography>
            </Grid>
            <Grid item xs={6} md={3} sx={flexAlignCenter}>
              <WbSunnyIcon color="primary" />
              <Typography>
                Set: {formatToLocalTime(sunset, timezone, "hh:mm a")}
              </Typography>
            </Grid>
            <Grid item xs={6} md={3} sx={flexAlignCenter}>
              <WbSunnyIcon color="primary" />
              <Typography>
                Set: {formatToLocalTime(sunset, timezone, "hh:mm a")}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid></Grid>
    </Box>
  );
};
