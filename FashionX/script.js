// Function to search products by title or description
function searchProduct() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const cardTitle = card.querySelector('h3').innerText.toLowerCase();
        const cardDescription = card.querySelector('p').innerText.toLowerCase();

        if (cardTitle.includes(searchInput) || cardDescription.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
