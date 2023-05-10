/*VARIBLE DECLARATIONS*/
const currentDate = new Date();
// const today = currentDate.getDate();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
const monthYear = document.querySelector("#month-year");
const previousBtn = document.querySelector("#previous-month");
const nextBtn = document.querySelector("#next-month");
const dates = document.querySelectorAll(".date");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

/*FUNCTION DECLARATIONS*/
const displayMonth = (year, month) => {
  const firstDay = new Date(year, month).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  
  monthYear.textContent = `${months[month]} ${year}`;
  
  for (let i = 0; i < dates.length; i++) {
    if (i < firstDay || i >= lastDate + firstDay) {
      dates[i].textContent = "";
    } else {
      dates[i].textContent = i - firstDay + 1;
      // if(parseInt(dates[i].textContent) === today && month === currentMonth) {
      //   dates[i].classList.add('today');
      // }
    }
  }
}

/*DISPLAY CURRENT MONTH*/
displayMonth(currentYear, currentMonth);

/*DISPLAY PREVIOUS MONTH ON BUTTON CLICK*/
previousBtn.addEventListener("click", () => {
  currentMonth--;
  if(currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  displayMonth(currentYear, currentMonth);
});

/*DISPLAY NEXT MONTH ON BUTTON CLICK*/
nextBtn.addEventListener("click", () => {
  currentMonth++;
  if(currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  displayMonth(currentYear, currentMonth);
});
