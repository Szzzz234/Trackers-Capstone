/*
const validateAgeInput = (ageData) => {
    // Check if the input is not empty and can be parsed as a date
    if (!ageData || isNaN(Date.parse(ageData))) {
        return false;
    }
    return true;
}
export default validateAgeInput;
*/

export const validateYear = (year) => {
  const currentYear = new Date().getFullYear();
  return (
    year &&
    !isNaN(year) &&
    year.length === 4 &&
    parseInt(year) > 1900 &&
    parseInt(year) <= currentYear
  );
};


export const validateMonth = (month) => {
  return (
    month &&
    !isNaN(month) &&
    month.length <= 2 &&
    parseInt(month) >= 1 &&
    parseInt(month) <= 12
  );
};

export const validateDay = (day) => {
  return (
    day &&
    !isNaN(day) &&
    day.length <= 2 &&
    parseInt(day) >= 1 &&
    parseInt(day) <= 31
  );
};


export const isOlderThan21 = (year, month, day) => {
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age >= 21;
};
