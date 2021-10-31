const target = document.querySelector(".section_1 h1");

// Parallex text effect
document.addEventListener("scroll", async (e) => {
  const distance = window.scrollY;
  target.style.transition = `all 700ms`;
  target.style.transform = `translateY(-${distance / 5}%)`;
});

const follow = document.querySelector(".follow");

// Make follow div follow mouse
document.addEventListener("mousemove", (e) => {
  let x = e.clientX - 35;
  let y = e.clientY - 35;
  follow.style.top = y + "px";
  follow.style.left = x + "px";
});
