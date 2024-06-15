const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  const productCards = item.querySelectorAll('.product-card');
  const firstProductCard = productCards[0];
  const lastProductCard = productCards[productCards.length - 1];

  // Clone the first and last product cards
  const firstClone = firstProductCard.cloneNode(true);
  const lastClone = lastProductCard.cloneNode(true);

  // Append the clones to the end and beginning of the product container
  item.appendChild(firstClone);
  item.insertBefore(lastClone, firstProductCard);

  // Get the width of the first product card (assuming all have same width)
  const productCardWidth = firstProductCard.offsetWidth;

  // Update scroll amount to show two photos per slide
  const scrollAmount = productCardWidth * 2;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += scrollAmount;
    if (item.scrollLeft >= item.scrollWidth - item.offsetWidth) {
      item.scrollLeft = 0;
    }
  });

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= scrollAmount;
    if (item.scrollLeft <= 0) {
      item.scrollLeft = item.scrollWidth - item.offsetWidth;
    }
  });
});