import { useState } from "react";
import { useSelector } from "react-redux";

import { selectTripsList } from "../../redux/trips/tripsSelectors";

import TripCard from "../TripCard/TripCard";
import AddTripButton from "../UI/AddTripButton/AddTripButton";
import Modal from "../UI/Modal/Modal";

import "./TripGallery.scss";
import TripForm from "../TripForm/TripForm";

const TripGallery = () => {
  const tripsList = useSelector(selectTripsList);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToogleModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <ul className="trip__list">
        {tripsList?.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
        <li onClick={handleToogleModalOpen}>
          <AddTripButton />
        </li>
      </ul>
      {isModalOpen && (
        <Modal onModalClose={handleToogleModalOpen}>
          {<TripForm onModalClose={handleToogleModalOpen} />}
        </Modal>
      )}
    </>
  );
};

export default TripGallery;
