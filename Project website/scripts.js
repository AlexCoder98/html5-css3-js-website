// HEADER ANIMATION

let activeElement = 0;
const duration = 6000;

const img = document.querySelector(".largeImage");
const h1 = document.querySelector(".animation h1");

const images = [
  "images/productivity.jpg",
  "images/solutions.jpg",
  "images/result.jpg",
];

const text = [
  "Szybkość działania",
  "Skuteczne i nowoczesne rozwiązania",
  "Widoczne efekty",
];

const arrowLeft = document.querySelector(".animation .left");
const arrowRight = document.querySelector(".animation .right");

if (window.innerWidth < 768) {
  arrowLeft.style.display = "block";
  arrowRight.style.display = "block";
} else {
  arrowLeft.style.display = "none";
  arrowRight.style.display = "none";
}

arrowRight.addEventListener("click", () => {
  activeElement++;
  if (activeElement === images.length) {
    activeElement = 0;
  }
  img.src = images[activeElement];
  h1.textContent = text[activeElement];
});

arrowLeft.addEventListener("click", () => {
  activeElement--;
  if (activeElement === images.length) {
    activeElement = 0;
  } else if (activeElement < 0) {
    activeElement = images.length - 1;
  }
  img.src = images[activeElement];
  h1.textContent = text[activeElement];
});

function imageChange() {
  if (window.innerWidth < 768) {
    h1.style.animation = "none";
    img.style.animation = "none";
    return;
  }
  activeElement++;
  if (activeElement === images.length) {
    activeElement = 0;
  }
  img.src = images[activeElement];
  h1.textContent = text[activeElement];
}
setInterval(imageChange, duration);

// POP - UP

const buttons = document.querySelectorAll(".container button");

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    document.querySelector(".modal-wrap").classList.add("active");
    document.querySelector(".wrapper").classList.add("blur");
  })
);

const btnClose = document.querySelector(".modal-wrap button");

btnClose.addEventListener("click", () => {
  document.querySelector(".modal-wrap").classList.remove("active");
  document.querySelector(".wrapper").classList.remove("blur");
});

//SOLUTIONS SECTION

// const arrowAreas = [...document.querySelectorAll(".solutions .arrow")];
// const lists = [...document.querySelectorAll(".solutions .list")];
// const arrows = [...document.querySelectorAll(".solutions .arrow .fas")];

const arrowAreaCustomer = document.querySelector(".solutions .customer .arrow");
const arrowAreaOperations = document.querySelector(
  ".solutions .operations .arrow"
);
const arrowAreaData = document.querySelector(".solutions .data .arrow");
const arrowAreaCore = document.querySelector(".solutions .core .arrow");

const listCustomer = document.querySelector(".solutions .customer .list");
const listOperations = document.querySelector(".solutions .operations .list");
const listData = document.querySelector(".solutions .data .list");
const listCore = document.querySelector(".solutions .core .list");

const arrowCustomer = document.querySelector(
  ".solutions .customer .arrow .fas"
);
const arrowOperations = document.querySelector(
  ".solutions .operations .arrow .fas"
);
const arrowData = document.querySelector(".solutions .data .arrow .fas");
const arrowCore = document.querySelector(".solutions .core .arrow .fas");

const handlers = {
  option: "",
  active: false,
};

arrowAreaCustomer.addEventListener("click", () => {
  if (handlers.active === false) {
    listCustomer.style.bottom = "0";
    arrowCustomer.style.transform = "rotate(180deg)";
    handlers.active = !handlers.active;
  } else {
    listCustomer.style.bottom = "-100%";
    arrowCustomer.style.transform = "none";
    handlers.active = !handlers.active;
  }
});

arrowAreaOperations.addEventListener("click", () => {
  if (handlers.active === false) {
    listOperations.style.bottom = "0";
    arrowOperations.style.transform = "rotate(180deg)";
    handlers.active = !handlers.active;
  } else {
    listOperations.style.bottom = "-100%";
    arrowOperations.style.transform = "none";
    handlers.active = !handlers.active;
  }
});

arrowAreaData.addEventListener("click", () => {
  if (handlers.active === false) {
    listData.style.bottom = "0";
    arrowData.style.transform = "rotate(180deg)";
    handlers.active = !handlers.active;
  } else {
    listData.style.bottom = "-100%";
    arrowData.style.transform = "none";
    handlers.active = !handlers.active;
  }
});

arrowAreaCore.addEventListener("click", () => {
  if (handlers.active === false) {
    listCore.style.bottom = "0";
    arrowCore.style.transform = "rotate(180deg)";
    handlers.active = !handlers.active;
  } else {
    listCore.style.bottom = "-100%";
    arrowCore.style.transform = "none";
    handlers.active = !handlers.active;
  }
});

// function listExtend() {
//   handlers.option = this.dataset.option;
//   console.log(handlers.option);
//   if (handlers.active === false) {
//       lists.forEach(list => list.style.bottom = "0");
//       arrows.forEach(arrow => arrow.style.transform = "rotate(180deg)");
//       handlers.active = !handlers.active;
//   } else {
//       lists.forEach(list =>list.style.bottom = "-100%");
//       arrows.forEach(arrow => arrow.style.transform = "none");
//       handlers.active = !handlers.active;
//   }
// }

// arrowAreas.forEach((arrow) => arrow.addEventListener("click", listExtend));

//ARROWS

document
  .querySelectorAll(".slick-arrow")
  .forEach((button) => (button.innerHTML = ">"));

// SCROLL UP

const btnArrow = document.querySelector(".arrowToScroll");

window.onscroll = () => {
  if (window.scrollY < 300) {
    btnArrow.style.display = "none";
  } else {
    btnArrow.style.display = "block";
  }
};

btnArrow.addEventListener("click", () => {
  // window.scrollTo({
  //   top: 0,
  // });
  window.scrollTo(0, 0);
});
