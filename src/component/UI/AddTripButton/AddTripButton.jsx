import { BsFillCalendar2PlusFill } from "react-icons/bs";

import "./AddTripButton.scss";

const AddTripButton = () => {
  return (
    <button type="button" className="add-trip__btn">
      <BsFillCalendar2PlusFill /> Add trip
    </button>
  );
};

export default AddTripButton;
