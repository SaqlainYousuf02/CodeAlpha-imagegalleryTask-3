let currentIndex = 0;
let images = [];

function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  images = Array.from(document.querySelectorAll(".gallery-img")).filter(el => el.style.display !== "none");

  currentIndex = images.indexOf(img);
  lightboxImg.src = img.src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(n) {
  currentIndex += n;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function filterImages(category) {
  const allImages = document.querySelectorAll(".gallery-img");
  allImages.forEach(img => {
    img.style.display = (category === "all" || img.classList.contains(category)) ? "block" : "none";
  });
}
