document.addEventListener('DOMContentLoaded', () => {
    const buyPopup = document.getElementById('buy-popup');

    const closePopup = (popup) => {
        popup.style.bottom = '-100%';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300);
    };

    // Show buy popup on "BUY NOW" button click
    document.querySelectorAll('.shop-product-button .buy').forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            buyPopup.style.display = 'block';
            setTimeout(() => {
                buyPopup.style.bottom = '0';
            }, 10);
        });
    });

    // Close buy popup on close button click
    document.querySelector('.buy-popup .close').addEventListener('click', () => closePopup(buyPopup));

    // Close buy popup on clicking outside
    document.addEventListener('click', (event) => {
        if (!buyPopup.contains(event.target) && !event.target.closest('.shop-product-button .buy')) {
            closePopup(buyPopup);
        }
    });

    // Prevent propagation when clicking inside the buy popup
    buyPopup.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Buy item
    document.querySelector('.buy-item').addEventListener('click', function() {
        // Buy item logic here
        alert('Item bought!');
        closePopup(buyPopup);
    });
});
