document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('sell-form');
  const feedback = document.getElementById('form-feedback');
  const goodsList = document.getElementById('goods-list');

  // Handle form submission
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Collect form data
    const itemName = document.getElementById('item-name').value;
    const itemDescription = document.getElementById('item-description').value;
    const itemPrice = document.getElementById('item-price').value;
    const itemContact = document.getElementById('item-contact').value;

    // Create a new list item for the "Buy Goods" section
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <h3>${itemName}</h3>
      <p>${itemDescription}</p>
      <p><strong>Price:</strong> $${itemPrice}</p>
      <p><strong>Contact:</strong> ${itemContact}</p>
      <button class="buy-btn">Buy Now</button>
    `;
    goodsList.appendChild(listItem);

    // Provide feedback to the user
    feedback.textContent = 'Item listed successfully!';
    feedback.style.color = 'green';

    // Reset the form
    form.reset();
  });

  // Add a simple interaction for the "Buy Now" buttons
  goodsList.addEventListener('click', function (event) {
    if (event.target.classList.contains('buy-btn')) {
      alert('Thank you for your interest! Contact the seller to finalize the purchase.');
    }
  });
});
