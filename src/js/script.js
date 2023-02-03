import { Event } from "./components/Event";
// import { data } from "./components/events_data";
//node pro vsechny .events__card

// eventsCards.forEach((card, index) => {
//   console.log(card);
//   card.querySelector(".events__card-heading").innerHTML=events[index];
// });

//event listener, aby byla navigace ziva
//loading data
const loadData = async () => {
  const response = await fetch(
    "https://test-api.codingbootcamp.cz/api/c67330b3/events"
    );
    const data = await response.json();
    console.log("request back with data", data);
    
    //list for navigation
    const eventsList = document.querySelector(".events__list");
    
    //button for navigation    
    data.forEach((object, index) => {
      const div = document.createElement("div");
        div.classList.add("events__card");
      div.innerHTML = `
        <h2 class="events__card-heading">${object.name}</h2>
        <button id ="${object.id}"  class="events__card-btn">More</button>`;
      eventsList.appendChild(div);
   
      
    });
    
    //button click => showing articles
    const btns = document.querySelectorAll(".events__card-btn");
    
    btns.forEach((eachBtn) => {
      eachBtn.addEventListener(
        "click", (event) => {
          loadArticles(eachBtn.id);
        }
        );
      });
    };



// dynamicky slozena url
const loadArticles = async (description) => {
  const response = await fetch(
    `https://test-api.codingbootcamp.cz/api/c67330b3/events=${description}`
  );
  const data = await response.json();
    console.log(description);
  console.log(data.data);
  const articleField = document.querySelector(".article");
  const eachArticle = document.createElement("div");
  articleField.innerHTML = "";
  articleField.append(eachArticle);
  data.data.channel.item.forEach((item) => {
    eachArticle.textContent += item.title;
  });
};

document.addEventListener("DOMContentLoaded", loadData);
