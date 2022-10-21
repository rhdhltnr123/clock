// 시간정보 문서객체(DOM) 선택
const hEl = document.getElementById("hours");
const mEl = document.getElementById("min");
const sEl = document.getElementById("sec");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const wek = document.querySelectorAll(".box");

// 현재 시간값 구하기
let d = new Date(); //현재 시간 가져오기
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
let a1 = d.getFullYear();
let b1 = d.getMonth() + 1;
let c1 = d.getDate();
let d1 = d.getDay();

// 시간 표시하기
hEl.innerText = h;
mEl.innerText = m;
sEl.innerText = s;
a.innerText = a1;
b.innerText = b1;
c.innerText = c1;

if (d1 == 0) {
  wek[0].style.color = "#3333CC";
} else if (d1 == 1) {
  wek[1].style.color = "#3333CC";
} else if (d1 == 2) {
  wek[2].style.color = "#3333CC";
} else if (d1 == 3) {
  wek[3].style.color = "#3333CC";
} else if (d1 == 4) {
  wek[4].style.color = "#3333CC";
} else if (d1 == 5) {
  wek[5].style.color = "#3333CC";
} else {
  wek[6].style.color = "#3333CC";
}

// 인터벌 함수로 시계 돌리기
setInterval(function () {
  // 시간정보 문서객체(DOM) 선택
  const hEl = document.getElementById("hours");
  const mEl = document.getElementById("min");
  const sEl = document.getElementById("sec");
  const Ampm = document.getElementById("ampm");

  // 현재 시간값 구하기
  let d = new Date(); //현재 시간 가져오기
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();

  if (s < 10) {
    s = "0" + s;
  }
  if (m < 10) {
    m = "0" + m;
  }

  if (h >= 13) {
    ampm = "PM";
    h = h - 12;
    if (h < 10) {
      h = "0" + h;
    }
  } else {
    ampm = "AM";
    if (h < 10) {
      h = "0" + h;
    }
  }

  // 시간 표시하기
  Ampm.innerHTML = ampm;
  hEl.innerHTML = h;
  mEl.innerText = m;
  sEl.innerText = s;
}, 1000);

let bg = document.querySelector(".clock-box");
let btn = document.querySelector(".btn1");
let body = document.querySelector("#body");
btn.addEventListener("click", () => {
  bg.classList.toggle("black");
  btn.classList.toggle("white");
  body.classList.toggle("asdf");
});
