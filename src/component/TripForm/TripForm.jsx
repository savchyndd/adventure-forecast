import { BsPlusLg } from "react-icons/bs";
import { useDispatch } from "react-redux";

import "./TripForm.scss";

const TripForm = ({ onModalClose }) => {
  const dispatch = useDispatch();
  // const trip = useSelector(selectContactsList);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    dispatch;
    // const formName = e.target.elements.name.value;
    // const formNumber = e.target.elements.number.value;
    // if (contacts.some(({ name }) => name === formName)) {
    //   return alert(`${formName} is already in contacts`);
    // }

    // if (contacts.some(({ number }) => number === formNumber)) {
    //   return alert(`${formNumber} is already in contacts`);
    // }

    // dispatch(addContact({ name: formName, number: formNumber.toString() }))
    //   .unwrap()
    //   .then((originalPromiseResult) => {
    //     Notify.success(
    //       `${originalPromiseResult.name} successfully added to contacts`
    //     );
    //   })
    //   .catch(() => {
    //     Notify.failure("Sorry, something's wrong");
    //   });

    onModalClose();
    form.reset();
  };

  return (
    <div>
      <div className="trip-form__header">
        <p>Create trip</p>
        <button type="button" onClick={onModalClose}>
          <BsPlusLg />
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="trip-form__form"
      >
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name ..."
            // value={trip.name}
          />
        </label>
        <label>
          Number
          <input
            type="date"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter number ..."
            // value={trip.number}
          />
        </label>
        <label>
          Number
          <input
            type="date"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter number ..."
            // value={trip.number}
          />
        </label>
        <div>
          <button type="button" onClick={onModalClose}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default TripForm;
