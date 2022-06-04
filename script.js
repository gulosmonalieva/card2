alert("Я оцениваю свою работу на 110 баллов");
const body = document.body;
const wrapper = document.createElement("div");
const card = document.createElement("div");
const images = document.createElement("img");
const title = document.createElement("h3");
const cardText = document.createElement("p");
const item = document.createElement("div");
const price = document.createElement("div");
const imgEl = document.createElement("img");
const rightText = document.createElement("p");
const priceText = document.createElement("div");
const oclock = document.createElement("img");
const leftText = document.createElement("p");
const line = document.createElement("hr");
const footer = document.createElement("div");
const userImg = document.createElement("img");
const userName = document.createElement("span");
const userText = document.createElement("span");

document.body.append(wrapper);
wrapper.setAttribute("id", "wrapper");
console.log(wrapper);
wrapper.append(card);
card.classList.add("card");
card.append(images);
card.append(title);
title.classList.add("title");
card.append(cardText);
card.append(item);
card.append(line);
card.append(footer);
item.append(price);
price.append(imgEl);
price.append(rightText);
priceText.append(oclock);
item.append(priceText);
priceText.append(leftText);
footer.append(userImg);
footer.append(userName);
footer.append(userText);

title.innerText = "Eguilibirim #3429";
cardText.innerText = "Our Eguilibirim collection promotes balance and calm";
rightText.innerText = "0.041ETH";
leftText.innerText = "3 days left";
userImg.setAttribute("src", "./img/image-avatar.png");
userText.innerText = "Jules Wyvern";
userName.innerText = "Cretion of";
images.setAttribute("src", "./img/image.jpg");

document.body.style.margin = "0";
document.body.style.backgroundColor = "hsl(217, 54%, 11%)";
document.body.style.fontFamily = "Outfit, sans-serif";
document.body.style.fontSize = "18px";

wrapper.style.maxWidth = "1440px";
wrapper.style.margin = "50px auto";
wrapper.style.marginLeft = "600px";

card.style.backgroundColor = " hsl(216, 50%, 16%)";
card.style.width = "300px";
card.style.borderRadius = "25px";
card.style.padding = "25px 25px";

images.style.width = "300px";
images.style.borderRadius = "20px";

title.style.color = "hsl(0, 0%, 100%)";
cardText.style.color = "hsl(215, 51%, 70%)";
cardText.style.fontSize = "18px";
card.style.boxShadow =
  "3px 14px 28px rgba(0,0,0,0.25), 3px 10px 10px rgba(0,0,0,0.22)";
item.style.display = "flex";
item.style.justifyContent = " space-between";
price.style.display = "flex";
price.style.alignItems = "center";
price.style.gap = "8px";
priceText.style.display = "flex";
priceText.style.alignItems = "center";
priceText.style.gap = "8px";
imgEl.src = "./img/icon-ethereum.svg";

rightText.style.color = "hsl(178, 100%, 50%)";
oclock.src = "./img/icon-clock.svg";

leftText.style.color = "hsl(215, 51%, 70%)";
line.style.border = "1px solid hsl(215, 32%, 27%)";
line.style.marginBottom = "20px";
footer.style.display = "flex";
footer.style.alignItems = "center";
footer.style.gap = "15px";
userImg.style.width = "30px";
userImg.style.border = "2px solid white";
userImg.style.borderRadius = "80px";
userName.style.color = "hsl(215, 51%, 70%)";
userText.style.color = "hsl(0, 0%, 100%)";
