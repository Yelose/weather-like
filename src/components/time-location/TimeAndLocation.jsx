import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { formatToLocalTime } from "../../services/weatherService";
import { blue } from "@mui/material/colors";
export default function TimeAndLocation({
  weather: { dt, timezone, name, country },
}) {
  const weekDayNumber = new Date().getDay().toString();
  const dayNow = new Date().getDate().toString();
  const monthNow = new Date().getMonth().toString();
  const yearNow = new Date().getFullYear().toString();

  return (
    <Box className="time-location-container" sx={{ backgroundColor: blue[50] }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h3">
            <span>
              {/* {name} */}
              City
            </span>{" "}
            <span>
              Country
              {/* {country} */}
            </span>
          </Typography>
          <Typography variant="subtitle2">
            local time
            {/* {formatToLocalTime(dt, timezone)} */}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
