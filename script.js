let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productId = product.getAttribute('data-id');
        const productName = product.querySelector('h3').innerText;
        const productPrice = product.querySelector('p').innerText.replace('Price: $', '');

        cart.push({ id: productId, name: productName, price: parseFloat(productPrice) });
        alert(`${productName} has been added to your cart!`);
        console.log(cart); // For testing purposes
    });
});