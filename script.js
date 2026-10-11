const products = [
    { id: 1, name: "Mouse", price: 25 },
    { id: 2, name: "Keyboard", price: 80 },
    { id: 3, name: "USB Hub", price: 40 }
];

let cart = [];

// Initialize the store products so they appear on the page
document.getElementById('product-list').innerHTML = products.map(p => 
    `<li>${p.name} - $${p.price} <button onclick="addToCart(${p.id})">Add</button></li>`
).join('');

function addToCart(id) {
    cart.push(products.find(p => p.id === id));
    updateCart();
}

function removeItem(index) {
    // filter() removes the item at the specified index
    cart = cart.filter((_, i) => i !== index);
    updateCart();
}

function updateCart() {
    // map() generates the HTML list
    document.getElementById('cart-list').innerHTML = cart.map((item, index) => 
        `<li>${item.name} - $${item.price} <button onclick="removeItem(${index})">Remove</button></li>`
    ).join('');

    // reduce() calculates the total price
    document.getElementById('total-price').innerText = 
        cart.reduce((total, item) => total + item.price, 0);
}