// dfropdown
document.addEventListener('DOMContentLoaded', () => {
    const currentAddress = document.getElementById('currentAddress');
    const addressOptions = document.getElementById('addressOptions');
    const chevronIcon = currentAddress.querySelector('.fa-chevron-icon');

    currentAddress.addEventListener('click', () => {
        addressOptions.classList.toggle('show');
        chevronIcon.classList.toggle('open');
    });
});