document.querySelectorAll('.shop-product-button .cart').forEach(button => {
    button.addEventListener('click', function() {
        const cartPopup = document.getElementById('cart-popup');
        cartPopup.style.display = 'block';
        setTimeout(() => {
            cartPopup.style.bottom = '0';
        }, 10);
    });
});

document.querySelector('.cart-popup .close').addEventListener('click', function() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.bottom = '-100%';
    setTimeout(() => {
        cartPopup.style.display = 'none';
    }, 300);
});

document.querySelector('.quantity-control .increase').addEventListener('click', function() {
    const quantityInput = document.querySelector('.quantity-control .quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

document.querySelector('.quantity-control .decrease').addEventListener('click', function() {
    const quantityInput = document.querySelector('.quantity-control .quantity');
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
});

document.querySelector('.add-item').addEventListener('click', function() {
    // Add item to cart logic here
    alert('Item added to cart!');
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.bottom = '-100%';
    setTimeout(() => {
        cartPopup.style.display = 'none';
    }, 300);
});



