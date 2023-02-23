import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TimeAndLocation from "../components/time-location/TimeAndLocation";
import getFormattedWeatherData from "../services/weatherService";
import { useEffect, useState } from "react";
import { TemperatureDetails } from "../components/temperature/TemperatureDetails";

export default function Home() {
  var city = "";

  const fetchCity = async () => {
    let result = await fetch("https://get.geojs.io/v1/ip/geo.json");
    let body = await result.json();
    city = body.city;
    return city;
  };

  const [query, setQuery] = useState({ q: "madrid" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  // setQuery({ q: localCity });
  // useEffect(() => {
  //   const fetchWeather = async () => {
  //     await getFormattedWeatherData({ ...query, units }).then((data) => {
  //       setWeather(data);
  //     });
  //   };
  //   fetchWeather();
  // }, [query, units]);
  // console.log(weather);

  // probar con windows.city para ver si es un problema de scope de useEffect
  // useEffect(() => {
  //   if (city == null || city == undefined) {
  //     const fetchLocalCity = async () => {
  //       await fetchCity().then((city) => {
  //         setQuery({ q: city });
  //       });
  //       fetchLocalCity();
  //     };
  //   }
  // });

  console.log(city);

  return (
    <main>
      {weather && (
        <section>
          {/* <TimeAndLocation /> */}
          {/* <TemperatureDetails /> */}
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
