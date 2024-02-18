import { getDayOfWeek } from "../../utils/dateFormaters";

const WeatherCard = ({ weather }) => {
  return (
    <li className="weather__item">
      <p>{`${getDayOfWeek(weather.datetime)}`}</p>
      {/* <img src={weather.img} alt={weather.city} className="weather__img" /> */}
      <p>{`${weather.tempmin}/${weather.tempmax}`}</p>
    </li>
  );
};

export default WeatherCard;
