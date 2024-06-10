// dfropdown
// document.addEventListener('DOMContentLoaded', () => {
//     const currentAddress = document.getElementById('currentAddress');
//     const addressOptions = document.getElementById('addressOptions');
//     const chevronIcon = currentAddress.querySelector('.fa-chevron-icon');

//     currentAddress.addEventListener('click', () => {
//         addressOptions.classList.toggle('show');
//         chevronIcon.classList.toggle('open');
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const currentAddress = document.getElementById('currentAddress');
    const addressOptions = document.getElementById('addressOptions');
    const chevronIcon = currentAddress.querySelector('.fa-chevron-icon');

    // Toggle dropdown visibility
    currentAddress.addEventListener('click', (event) => {
        event.stopPropagation();
        addressOptions.classList.toggle('show');
        chevronIcon.classList.toggle('open');
    });

    // Collapse dropdown on clicking outside
    document.addEventListener('click', (event) => {
        if (!currentAddress.contains(event.target)) {
            addressOptions.classList.remove('show');
            chevronIcon.classList.remove('open');
        }
    });
});
