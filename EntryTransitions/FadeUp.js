export default (element, time = 0.6, delay = 0.2) => {
  // Get the element
  const target = document.querySelector(element);
  const ob = new IntersectionObserver(
    (entries, observer) => {
      let ele = entries[0];
      ele.target.style.transform = "tra";
    },
    {
      rootMargin: "0px 0px -40px 0px",
    }
  );
};
