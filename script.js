//SWIPER FOR DOCTORS
document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-carousel', {
		perPage    : 2,
		breakpoints: {
			640: {
				perPage: 1,
			},
		},
  } ).mount();
} );

//SWiPER FOR REVIEWS

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#card-carousel', {
    gap:`10px`,
		perPage    : 3,
		breakpoints: {
			1000: {
				perPage: 1,
			},
		},
  } ).mount();
} );


//Sending message script
const CHAT_ID = "-913542926";
const URI_API =
  "https://api.telegram.org/bot6574586981:AAHaBa0jIw2PRv6-EoCnTP0ZyWR6k6wl14Y/sendMessage";

document.getElementById("tg").addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    document.getElementById("user_phone").value === `+380` &&
    document.getElementById("user_phone").value.length < 13
  ) {
    window.alert("Введите номер телефона/Введіть номер телефону");
  } else {
    document.querySelector("input").style.display = "none";
    document.querySelector(".main-consult button").style.display = "none";

    let massage = "<b>Кинули заявку(Главная страница):</b>";
    massage += document.getElementById("user_phone").value;

    axios
      .post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: massage,
      })
      .then((res) => {
        this.user_phone.value = "";
        success.style.display = "block";
      });
  }
});

//HAMBURGER MENU SCRIPT
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const headerHeight = document.querySelector("header");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
  headerHeight.classList.toggle("active");
});

const expandReview = document.querySelector(".reviews-block");

expandReview.addEventListener("click", () => {
  expandReview.classList.toggle("active");
});

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//   hamburger.classList.remove("active");
//   navList.classList.remove("active");
//   headerHeight.classList.remove("active");
// }))
