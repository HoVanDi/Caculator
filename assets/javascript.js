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
    yearInput < 0 ||
    yearInput.toString().length !== 4 ||// Kiểm tra năm phải có đúng 4 chữ số
    birthDate > today ||
    dayInput !== birthDate.getDate() ||   //Lấy giá trị ngày trong tháng 
    monthInput - 1 !== birthDate.getMonth()
  ) {
    // Nếu ngày tháng năm không hợp lệ, không tính toán
    alert("Vui lòng kiểm tra lại ngày, tháng, năm sinh của bạn")
    document.getElementById("years-result").innerText = "--";
    document.getElementById("months-result").innerText = "--";
    document.getElementById("days-result").innerText = "--";
    return;
  }

  const ageInMilliseconds = today - birthDate;
  const ageDate = new Date(ageInMilliseconds); //biểu thị khoảng thời gian tính được. Điều này cho phép ta thao tác với các thành phần của khoảng thời gian như năm, tháng và ngày
  const years = ageDate.getUTCFullYear() - 1970; 
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1; //số ngày còn lại tính từ đầu tháng

  document.getElementById("years-result").innerText = years;
  document.getElementById("months-result").innerText = months;
  document.getElementById("days-result").innerText = days;
}

