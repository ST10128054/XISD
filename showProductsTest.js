const products = {
    pd1: { name: "Product 1", description: "Description of Product 1", price: "$10.00" },
    pd2: { name: "Product 2", description: "Description of Product 2", price: "$15.00" },
    pd3: { name: "Product 3", description: "Description of Product 3", price: "$20.00" }
};

// Function to display product details
function showProductDetails(productId) {
    const product = products[productId];
    if (product) {
        document.getElementById('product-name').innerText = product.name;
        document.getElementById('product-description').innerText = product.description;
        document.getElementById('product-price').innerText = product.price;

        // Show the product details section
        document.getElementById('product-details').style.display = 'block';
    }
}

// Event listener for product clicks
document.querySelectorAll('.product').forEach(item => {
    item.addEventListener('click', event => {
        const productId = event.target.getAttribute('data-id');
        showProductDetails(productId);
    });
});