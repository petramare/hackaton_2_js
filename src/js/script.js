import { Event } from "./components/Event";
import { data } from "./components/events_data";
//node pro vsechny .events__card
const eventsCards = document.querySelectorAll(".events__card");

console.log(data);
// eventsCards.forEach((card, index) => {
//   console.log(card);
//   card.querySelector(".events__card-heading").innerHTML=events[index];
// });
const eventsList = document.querySelector(".events__list");

data.forEach((object, index) => {
  const div = document.createElement("div");
    div.classList.add("events__card");
  div.innerHTML = `
    <h2 class="events__card-heading">${object.name}</h2>
    <button class="events__card-btn">More</button>`;
  eventsList.appendChild(div);
});
console.log();
