"use strict";

const imgContainer = document.querySelector("#img-container");

const btn = document.querySelector(".btn");
console.log(imgContainer, btn);
const arr = [1, 2, 3, 4, 5, 6];

const createImage = function () {
  arr.forEach((_, i) => {
    const imgEle = document.createElement("img");
    imgContainer.append(imgEle);
    imgEle.src = `https://picsum.photos/300/300?random=${Math.floor(
      Math.random() * 2000 + 1
    )}`;
  });
};
createImage();
btn.addEventListener("click", () => {
  createImage();
});
