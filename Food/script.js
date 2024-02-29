const stars = document.querySelectorAll(".rating > span");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    resetRating(); // Reset all stars

    // Fill the clicked star and all previous stars
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add("selected");
    }
  });
});

function resetRating() {
  stars.forEach((star) => {
    star.classList.remove("selected");
  });
}