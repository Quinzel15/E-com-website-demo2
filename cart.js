// Sample cart items
const cartItems = [
    {
        id: 1,
        name: "Vintage T-shirt",
        price: 786,
        quantity: 1,
        image: "tshirt.png"
    },
    {
        id: 2,
        name: "Retro Sunglasses",
        price: 1985,
        quantity: 1,
        image: "glass.png"
    },
    {
        id: 3,
        name: "Classic Jeans",
        price: 940,
        quantity: 1,
        image: "jean.png"
    }
];

// Function to render cart items
function renderCart() {
    const cartTableBody = document.querySelector('.cart-table tbody');
    cartTableBody.innerHTML = ''; // Clear existing items

    let totalPrice = 0;

    cartItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${item.image}" alt="${item.name}" class="cart-img"> ${item.name}
            </td>
            <td>₹${item.price}</td>
            <td>
                <input type="number" value="${item.quantity}" class="quantity-input" min="1" data-id="${item.id}">
            </td>
            <td>
                <button class="remove-btn" data-id="${item.id}">Remove</button>
            </td>
        `;
        cartTableBody.appendChild(row);
        totalPrice += item.price * item.quantity; // Calculate total price
    });

    document.querySelector('.total-price').innerHTML = `Total Price: ₹${totalPrice}`;
}

// Function to handle quantity change
function handleQuantityChange(event) {
    if (event.target.classList.contains('quantity-input')) {
        const id = parseInt(event.target.getAttribute('data-id'));
        const newQuantity = parseInt(event.target.value);
        const item = cartItems.find(item => item.id === id);
        
        if (item) {
            item.quantity = newQuantity; // Update the quantity
            renderCart(); // Re-render the cart to update the total price
        }
    }
}

// Function to remove item from cart
function removeItemFromCart(event) {
    if (event.target.classList.contains('remove-btn')) {
        const id = parseInt(event.target.getAttribute('data-id'));
        const index = cartItems.findIndex(item => item.id === id);
        
        if (index > -1) {
            cartItems.splice(index, 1); // Remove item from cart
            renderCart(); // Re-render the cart
        }
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', renderCart); // Render cart on page load
document.querySelector('.cart-table').addEventListener('input', handleQuantityChange); // Handle quantity input changes
document.querySelector('.cart-table').addEventListener('click', removeItemFromCart); // Handle remove button click
