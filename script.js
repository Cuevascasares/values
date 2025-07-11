const cards = [
    {
        title: "Traveler's Axe",
        value: "3,700",
        demand: 7,
        rarity: 4,
        stability: "Stable",
        origin: "Hallows 2023 (Pass)",
        change: "-100",
        color: "color-blue",
        image: "images/travaxe.png"
    },
    {
        title: "Traveler's Gun",
        value: "5,200",
        demand: 8,
        rarity: 5,
        stability: "Rising",
        origin: "Halloween 2023 (Unboxed)",
        change: "+300",
        color: "color-purple",
        image: "images/travgun.png"
    },
    {
        title: "Harvester",
        value: "5,200",
        demand: 8,
        rarity: 5,
        stability: "Rising",
        origin: "Halloween 2022 (Pass)",
        change: "+300",
        color: "color-purple",
        image: "images/harv.png"
    }
];

const container = document.getElementById("card-container");

cards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    cardElement.innerHTML = `
    <div class="image">
      <img src="${card.image}" alt="${card.title}" />
    </div>
    <div class="info">
      <div class="title-row">
  <h2 class="text-white">${card.title}</h2>
  <div class="value-block">
    <span class="value">${card.value}</span>
    <span class="change">${card.change}</span>
  </div>
</div>

      <p><strong>Stability:</strong> ${card.stability}</p>
      <p class="demand-rarity">
  <strong>Demand:</strong> 7&nbsp;&nbsp;&nbsp;&middot;&nbsp;&nbsp;&nbsp;<strong>Rarity:</strong> 4
</p>
      <p><strong>Origin:</strong> ${card.origin}</p>
    </div>
  `;

    container.appendChild(cardElement);
});
