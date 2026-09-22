document.addEventListener('DOMContentLoaded', () => {
    const orderButton = document.getElementById('order-btn');

    if (orderButton) {
        orderButton.addEventListener('click', () => {
            alert('Welcome to Bites of Cakes! Our online ordering menu will be available soon.');
        });
    }
});
