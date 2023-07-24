function calculateAge() {
  const dayInput = parseInt(document.getElementById("day-input").value);
  const monthInput = parseInt(document.getElementById("month-input").value);
  const yearInput = parseInt(document.getElementById("year-input").value);

  const today = new Date();
  const birthDate = new Date(yearInput, monthInput - 1, dayInput); // Subtract 1 because months in JavaScript start at 0

  if (
    isNaN(dayInput) ||
    isNaN(monthInput) ||
    isNaN(yearInput) ||
    dayInput < 1 ||
    dayInput > 31 ||
    monthInput < 1 ||
    monthInput > 12 ||
    yearInput < 0 ||
    yearInput.toString().length !== 4 || // Check year must have exactly 4 digits
    birthDate > today ||
    dayInput !== birthDate.getDate() ||   //Get the value of the day of the month 
    monthInput - 1 !== birthDate.getMonth()
  ) {
    // If the date is not valid, do not calculate
    alert("Please double check your date, month and year of birth")
    document.getElementById("years-result").innerText = "--";
    document.getElementById("months-result").innerText = "--";
    document.getElementById("days-result").innerText = "--";
    return;
  }

  const ageInMilliseconds = today - birthDate;
  const ageDate = new Date(ageInMilliseconds); //represents the estimated time. This allows us to manipulate time elements such as years, months, and days
  const years = ageDate.getUTCFullYear() - 1970; 
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1; //number of days remaining from the beginning of the month

  document.getElementById("years-result").innerText = years;
  document.getElementById("months-result").innerText = months;
  document.getElementById("days-result").innerText = days;
}

