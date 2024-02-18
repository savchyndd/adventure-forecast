export const changeDateFormat = (dateString) => {
  const date = new Date(dateString);

  const formatter = new Intl.DateTimeFormat("uk-UA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const formattedDate = formatter.format(date);

  return formattedDate;
};

export const getDayOfWeek = (dateString) => {
  const date = new Date(dateString);
  const dayOfWeek = new Intl.DateTimeFormat("en-EN", {
    weekday: "long",
  }).format(date);

  return dayOfWeek;
};
