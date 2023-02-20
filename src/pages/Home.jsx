import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TimeAndLocation from "../components/time-location/TimeAndLocation";
import getFormattedWeatherData from "../services/weatherService";
import { useEffect, useState } from "react";
import { TemperatureDetails } from "../components/temperature/TemperatureDetails";

export default function Home() {
  const [query, setQuery] = useState({ q: "madrid" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  console.log(weather);

  return (
    <main>
      {weather && (
        <section>
          <TimeAndLocation weather={weather} />
          <TemperatureDetails weather={weather} />
        </section>
      )}
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
