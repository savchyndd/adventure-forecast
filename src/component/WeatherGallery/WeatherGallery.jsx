import { useEffect, useState } from "react";
import { getWeekForecast } from "../../api/weatherAPI";
import WeatherCard from "../WeatherCard/WeatherCard";

import "./WeatherGallery.scss";
import { useSelector } from "react-redux";
import { selectTripsList } from "../../redux/trips/tripsSelectors";
import { selectIdActiveTrip } from "../../redux/filters/filtersSelectors";

const WeatherGallery = () => {
  const tripId = useSelector(selectIdActiveTrip);
  const tripsList = useSelector(selectTripsList);

  const [weekWeather, setWeekWeather] = useState([]);

  useEffect(() => {
    const currentTrip = tripsList?.find(({ id }) => id === Number(tripId));

    const fetchWeekWeather = async () => {
      const { city, startDate, endDate } = currentTrip;

      const fethedWeekWeather = await getWeekForecast(city, {
        startDate,
        endDate,
      });

      setWeekWeather(fethedWeekWeather);
    };

    if (currentTrip) fetchWeekWeather();
  }, [tripId, tripsList]);

  return (
    <ul className="weather__list">
      {weekWeather?.map((weather) => (
        <WeatherCard key={weather.datetime} weather={weather} />
      ))}
    </ul>
  );
};

export default WeatherGallery;
