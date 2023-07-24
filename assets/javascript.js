function calculateAge() {
  const dayInput = parseInt(document.getElementById("day-input").value);
  const monthInput = parseInt(document.getElementById("month-input").value);
  const yearInput = parseInt(document.getElementById("year-input").value);

  const today = new Date();
  const birthDate = new Date(yearInput, monthInput - 1, dayInput); // Trừ 1 vì tháng trong JavaScript bắt đầu từ 0

  if (
    isNaN(dayInput) ||
    isNaN(monthInput) ||
    isNaN(yearInput) ||
    dayInput < 1 ||
    dayInput > 31 ||
    monthInput < 1 ||
    monthInput > 12 ||
    birthDate > today ||
    dayInput !== birthDate.getDate() ||
    monthInput - 1 !== birthDate.getMonth()
  ) {
    // Nếu ngày tháng năm không hợp lệ, không tính toán
    document.getElementById("years-result").innerText = "--";
    document.getElementById("months-result").innerText = "--";
    document.getElementById("days-result").innerText = "--";
    return;
  }

  const ageInMilliseconds = today - birthDate;
  const ageDate = new Date(ageInMilliseconds);
  const years = ageDate.getUTCFullYear() - 1970;
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1;

  document.getElementById("years-result").innerText = years;
  document.getElementById("months-result").innerText = months;
  document.getElementById("days-result").innerText = days;
}

// Lắng nghe sự kiện input trong ô input để tự động tính toán khi nhập
document.getElementById("day-input").addEventListener("input", calculateAge);
document.getElementById("month-input").addEventListener("input", calculateAge);
document.getElementById("year-input").addEventListener("input", calculateAge);
