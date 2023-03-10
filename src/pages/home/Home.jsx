import "./home.css";
import TimeAndLocation from "../../components/time-location/TimeAndLocation";
import getFormattedWeatherData from "../../services/weatherService";
import SearchForm from "../../components/search/SearchForm";
export default function Home() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: "london" });
    console.log(data);
  };
  const hourNow = new Date().getHours();
  // const hourNow = 21;

  let background = "sunny";

  if (hourNow == 7) {
    background = "sunrise";
  }
  if (hourNow > 7 && hourNow < 13) {
    background = "sunny";
  }
  if (hourNow > 12 && hourNow < 19) {
    background = "afternoon";
  }
  if (hourNow == 19) {
    background = "sunset";
  }
  if (hourNow > 19 && hourNow < 24) {
    background = "evening";
  }
  if (hourNow >= 0 && hourNow < 7) {
    background = "night";
  }

  fetchWeather();

  return (
    <main className={background}>
      <section>
        <TimeAndLocation />
        <SearchForm />
      </section>
    </main>
  );
}
