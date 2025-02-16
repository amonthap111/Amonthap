function openModal(imgElement) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImg");

    // Set the source of the modal image to the clicked image
    modal.style.display = "block";
    modalImg.src = imgElement.src;
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}





