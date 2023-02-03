export class Event {
  constructor(event) {
    this.event = event;
    // this.id = event.id;
    // this.name = event.name;
    // this.data = event.data;
    // this.description = event.description;
    // this.img_url = event.img_url;
    this.showModal = false;
    this.element = document.createElement("div");

    this.refreshHtml();
  }

  refreshHtml = () => {
    // const div = document.createElement("div");
    this.element.classList.add("events__card");
    this.element.innerHTML = `
        <h2 class="events__card-heading">${this.event.name}</h2>
        <button class="events__card-btn">More</button>
    <div class="modal${
      this.showModal ? " modal_shown" : ""
    }" style="background-image:url('${this.event.image_url}')"></div>
        `;
    // eventsList.appendChild(div);
    const btn = this.element.querySelector("button.events__card-btn");
    btn.addEventListener("click", () => {
      this.showModal = !this.showModal;
      if (this.showModal) {
        const form = document.querySelector(".form");
        form.classList.add("form_shown");
      }
      this.refreshHtml();
    });
    const registerBtn = document.querySelector(".full");
    registerBtn.addEventListener("click", async (event) => {
      event.preventDefault();
      const url = `https://test-api.codingbootcamp.cz/api/77f3b34b/events/${this.event.id}/registrations`;
      const myDataObject = {
        email: document.querySelector("input[name=email]").value,
        first_name: document.querySelector("input[name=name]").value,
      };
      const myResponse = await fetch(url, {
        method: "POST",
        body: JSON.stringify(myDataObject),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const myUsableResponse = await myResponse.json();
      console.log(myUsableResponse);
    });
  };
}
