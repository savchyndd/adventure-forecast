import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

export const getWeekForecast = async (city, timeline) => {
  try {
    const { data } = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${timeline.startDate}/${timeline.endDate}?unitGroup=metric&include=days&key=${apiKey}&contentType=json`
    );

    return data.days;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

export const getTodaysWeather = async (city) => {
  try {
    const { data } = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=${apiKey}&contentType=json`
    );

    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
