document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('addressModal');
  var modalContent = document.querySelector('.address-modal-content');
  var span = document.getElementsByClassName('close-modal')[0];
  var dropdownBtn = document.getElementById('dropdownBtn');
  var dropdown = document.getElementById('addressDropdown');
  var selectButton = document.getElementById('selectShop');
  var selectedAddress = '';

  // Function to open the modal
  function openModal() {
    modal.style.display = 'block';
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = 'none';
    // Reset the dropdown and button
    dropdownBtn.textContent = 'Select an address';
    dropdownBtn.innerHTML = 'Select an address <span class="dropdown-icon">&#9662;</span>';
    selectButton.disabled = true;
    selectedAddress = '';
  }

  // Close the modal when clicking on <span> (x)
  span.onclick = closeModal;

  // Close the modal when clicking outside of it
  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal();
    }
  }

  // Prevent modal from closing when clicking inside it
  modalContent.onclick = function(event) {
    event.stopPropagation();
  }

  // Toggle dropdown
  dropdownBtn.onclick = function(event) {
    event.stopPropagation();
    dropdown.classList.toggle('show');
  }

  // Close the dropdown if clicked outside
  document.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName('dropdown-content');
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  });

  // Handle address selection
  dropdown.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      event.preventDefault();
      selectedAddress = event.target.getAttribute('data-address');
      dropdownBtn.innerHTML = event.target.textContent + ' <span class="dropdown-icon">&#9662;</span>';
      dropdown.classList.remove('show');
      selectButton.disabled = false;
    }
  });

  // Add click event listeners to all product images
  var productImages = document.querySelectorAll('.grid-product__image a');
  productImages.forEach(function(image) {
    image.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default link behavior
      openModal();
    });
  });

  // Handle shop selection
  selectButton.onclick = function() {
    if (selectedAddress) {
      alert("You selected: " + selectedAddress);
      closeModal();
    }
  }
});