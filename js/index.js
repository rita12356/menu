
let titles = [
  'Каша на завтрак',
  `Хачапури`,
  `Крабовый салат`,
  `Макарошки с тефтелями`,
  `Куриный суп`,
  `Медовик`,

];

let prices = [150, 300, 200, 250, 100, 150];
let available = [false, true, true, true, true, false];
let container = document.querySelector(`.food-container`);

for(let i = 0; i < titles.length; i++) {
  let title = titles[i];
  let price = prices[i];
  let isAvailable = available[i]
  let className = ` card`;
className += ` card-available`;

if(isAvailable) {
  className +=` card-available`;

} else{
  className += ` card-not-available`;
  
  price = `-`;
}
  container.innerHTML += `
  <div class="col">
  <div class="${className}">
  <img src="assets/${i + 1}.jpeg" class="card-img-top">
       
    <div class="card-body">
      <h5 class="card-title d-flex justify-content-between align-items-center flex-wrap">
        <span class="food-title">${title}</span>
        <span class="food-price badge bg-secondary">${price}</span>
      </h5>
    </div>
  </div>
</div>
`;

  
  
}

let cards = document.querySelectorAll(`.card`);
let result = document.querySelector(`#result`);
let total = 0;
for(let i = 0; i < cards.length; i++) {
  let card = cards[i];
  
  if(card.classList.contains(`card-available`)) {
    card.addEventListener(`click`, function() {
      card.classList.toggle(`card-active`);
      if(card.classList.contains(`card-active`)) {
        total += prices[i];
      } else{
        total -= prices[i];
        
      }
      result.innerHTML = total;
    });
  }

}




