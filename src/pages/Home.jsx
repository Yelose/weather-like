import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TimeAndLocation from "../components/time-location/TimeAndLocation";
import getFormattedWeatherData from "../services/weatherService";

export default function Home() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: "london" });
    console.log(data);
  };

  fetchWeather();

  return (
    <main>
      <section>
        <h2>Home Page</h2>

        <TimeAndLocation />
      </section>
      <Link to="/detail">
        <Button
          sx={{
            backgroundColor: "secondary.dark",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.9, 0.9],
            },
          }}
          variant="contained"
        >
          Details
        </Button>
      </Link>
    </main>
  );
}
