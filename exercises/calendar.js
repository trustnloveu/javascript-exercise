// 현재 날짜, 년, 월, 일
const today = new Date(); // 날짜
const currentYear = today.getFullYear(); // 년
const currentMonth = today.getMonth() + 1; // 월
const currentDate = today.getDate(); // 일
// 0 ~ 6 (일요일 ~ 토요일)
const currentDay = today.getDay(); // 요일

// (윤)년, 월, 일
const months = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

// 현재 년도 설정
document.getElementById(
  "current-year"
).innerHTML = `${currentYear} <i class="fas fa-angle-down"></i>`;

// 현재 월 설정
document.getElementById(
  "current-month"
).innerHTML = `${currentMonth} <i class="fas fa-angle-down"></i>`;

// dropdown years
function createYears() {
  const startYear = currentYear;
  const endYear = currentYear + 3;

  for (let i = startYear; i < endYear; i++) {
    const yearDiv = document.createElement("div");
    yearDiv.innerHTML = i;
    yearDiv.classList.add("dropdown_item");

    // 옵션에서 년 클릭시 달력 재구성
    yearDiv.onclick = () => {
      console.log("select year");
    };

    document.getElementById("years").appendChild(yearDiv);
  }
}

// dropdown months
function createMonths() {
  for (let i = 0; i < months.length; i++) {
    const monthDiv = document.createElement("div");
    monthDiv.innerHTML = months[i];
    monthDiv.classList.add("dropdown_item");

    // 옵션에서 월 클릭시 달력 재구성
    monthDiv.onclick = () => {
      console.log(`Month ${i + 1}`);
    };

    document.getElementById("months").appendChild(monthDiv);
  }
}

// toggle 이벤트
function toggleSelect(id) {
  document.getElementById(id).toggleAttribute("fast");

  switch (id) {
    case "years":
      console.log("year clicked.");
      console.log(document.getElementById(id));
      break;
    case "months":
      console.log("month clicked.");
      break;
  }
}

// 요일
function swipeDay(dayIndex) {
  switch (dayIndex) {
    case 0:
      return "일요일";
    case 1:
      return "월요일";
    case 2:
      return "화요일";
    case 3:
      return "수요일";
    case 4:
      return "목요일";
    case 5:
      return "금요일";
    case 6:
      return "토요일";
    default:
      alert("잘못된 입력");
  }
}

// 마지막 날짜 반환
// function getLastDate(year, month) {
//   return new Date(year, month + 1).getDate();
// }

// 날짜 구성 > 출력
function loadDays(year, month) {
  // document.getElementById("calendar-days").innerHTML = "";
  const firstdate = new Date(year, month - 1, 1).getDate();
  const lastDate = new Date(year, month, 0).getDate();
  const prevLastDate = new Date(year, month - 1, 0).getDate();
  const prevLastDay = new Date(year, month - 1, 0).getDay();
  const startDay = new Date(year, month - 1, 1).getDay();

  console.log(`현재 ${year}년 ${month}월`);
  console.log(`시작 일: ${firstdate}`);
  console.log(`마지막 일: ${lastDate}`);
  console.log(`지난달 마지막 일: ${prevLastDate}`);
  console.log(`지난달 마지막 요일: ${prevLastDay}`);
  console.log(`시작 요일: ${swipeDay(startDay)}`);

  // 캘릭터 생성 ( 6주 > 7일 )
  for (let week = 0; week < 6; week++) {
    // 한 주 div 생성
    const weekDiv = document.createElement("div");
    weekDiv.className = "week";
    // 지난 달 마지막까지
    for (let day = 0; day < startDay; day++) {
      const date = document.createElement("div");
      //   date.innerHTML = new Date(year, month - 1, 0);
      console.log(date);
      // 하루 추가(appendChild)
      //   weekDiv.appendChild("");
    }

    // 이번달
    for (let day = startDay; day < 7; day++) {
      console.log(day);
      // 하루 추가(appendChild)
      //   weekDiv.appendChild("");
    }

    // 이번달 마지막 주
    for (let nextMonth = 0; nextMonth < array.length; nextMonth++) {
      const element = array[nextMonth];
      // 하루 추가(appendChild)
      weekDiv.appendChild("");
    }

    // 한 주 추가(appendChild)
    document.getElementById("calendar-days").appendChild("weekDiv");
  }
}

createYears();
createMonths();
loadDays(currentYear, currentMonth, currentDate);

// dropdown years

///////////////////////////////

// 기본 설정
// const setCalendar = (year, month) => {
//   const date = new Date(year, month - 1, 1); // 년 + 월
//   const firstday = date.getDate(); // 시작 일
//   const firstdayName = date.getDay(); // 시작 요일
//   const lastDay = new Date(year, month, 0).getDate(); // 이번달 마지막 일
//   const prevLastDay = new Date(year, month, 0).getDate(); // 지난달 마지막 요일

//   console.log("firstday: " + firstday);
//   console.log("firstdayName: " + firstdayName);
// };

// let startDayCount = 1;
// let endDayCount = 1;

// setCalendar(year, month);
