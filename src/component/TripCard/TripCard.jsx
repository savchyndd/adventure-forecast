import { useDispatch } from "react-redux";
import { changeDateFormat } from "../../utils/dateFormaters";
import "./TripCard.scss";
import { setActiveTripId } from "../../redux/filters/filtersSlice";

const TripCard = ({ trip }) => {
  const dispatch = useDispatch();

  const handleClickTrip = (tripId) => {
    dispatch(setActiveTripId(tripId));
  };

  return (
    <li
      className="trip__item"
      tabIndex="0"
      onClick={() => handleClickTrip(trip.id)}
      onFocus={() => handleClickTrip(trip.id)}
    >
      <div className="trip__img-container">
        <img src={trip.img} alt={trip.city} className="trip__img" />
      </div>

      <p>{`${trip.city}`}</p>
      <p>{`${changeDateFormat(trip.startDate)} - ${changeDateFormat(
        trip.endDate
      )}`}</p>
    </li>
  );
};

export default TripCard;
