import TripGallery from "../TripGallery/TripGallery";
import WeatherGallery from "../WeatherGallery/WeatherGallery";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <section className="section">
      <div className="container">
        <TripGallery />
        <WeatherGallery />
      </div>
    </section>
  );
};

export default HomePage;
