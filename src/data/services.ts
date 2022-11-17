export const validateForm = ({ cityTo, cityFrom, dateTo, dateBack }: Record<string, string>) => {
  if (!cityTo) {
    return false;
  }
  if (!cityFrom) {
    return false;
  }
  if (!dateTo || !dateTo.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/i)) {
    return false;
  }
  if (dateBack && !dateBack.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/i)) {
    return false;
  }
  return true;
};
