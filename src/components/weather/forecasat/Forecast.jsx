import { Grid, Typography } from "@mui/material";
import { columnCentered } from "../../../styles/styles";

export default function Forecast(props) {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        sx={{
          padding: "0 20px",
          borderBottom: "2px solid rgba(0, 0, 100, 0.632)",
        }}
      >
        <Typography color="primary" variant="overline">
          {props.title}
        </Typography>
      </Grid>
      <Grid item xs={2} sm={2} md={2} sx={columnCentered}>
        <Typography variant="caption">02:00 PM</Typography>
        <figure>
          <img
            width="50"
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt="cloudy"
          />
        </figure>
        <Typography variant="h6">17º</Typography>
      </Grid>{" "}
      <Grid item xs={2} sm={2} md={2} sx={columnCentered}>
        <Typography variant="caption">02:00 PM</Typography>
        <figure>
          <img
            width="50"
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt="cloudy"
          />
        </figure>
        <Typography variant="h6">17º</Typography>
      </Grid>{" "}
      <Grid item xs={2} sm={2} md={2} sx={columnCentered}>
        <Typography variant="caption">02:00 PM</Typography>
        <figure>
          <img
            width="50"
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt="cloudy"
          />
        </figure>
        <Typography variant="h6">17º</Typography>
      </Grid>{" "}
      <Grid item xs={2} sm={2} md={2} sx={columnCentered}>
        <Typography variant="caption">02:00 PM</Typography>
        <figure>
          <img
            width="50"
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt="cloudy"
          />
        </figure>
        <Typography variant="h6">17º</Typography>
      </Grid>{" "}
      <Grid item xs={2} sm={2} md={2} sx={columnCentered}>
        <Typography variant="caption">02:00 PM</Typography>
        <figure>
          <img
            width="50"
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt="cloudy"
          />
        </figure>
        <Typography variant="h6">17º</Typography>
      </Grid>{" "}
      <Grid item xs={2} sm={2} md={2} sx={columnCentered}>
        <Typography variant="caption">02:00 PM</Typography>
        <figure>
          <img
            width="50"
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt="cloudy"
          />
        </figure>
        <Typography variant="h6">17º</Typography>
      </Grid>
    </Grid>
  );
}
