const galleryItem = document.querySelectorAll(".gallery-item");
const closeBtn  = document.getElementById("close-btn");
const lightboxImage = document.getElementById("lightbox-image");
const lightbox = document.querySelector(".lightbox");

galleryItem.forEach(function (img) {
  img.addEventListener("click", () => {
    lightboxImage.src = img.src.replace("-thumbnail", "")
    lightbox.style.display = "flex";
  })
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  })

lightbox.addEventListener("click", (event) => {

if(event.target === lightbox){
  lightbox.style.display = "none";
}
})

})