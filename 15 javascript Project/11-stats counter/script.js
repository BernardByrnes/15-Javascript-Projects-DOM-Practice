const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.textContent = "0"; // Start at zero
  const target = +counter.getAttribute("data-ceil"); // Target number
  const speed = 15; // Smaller = faster count

  const updateCounter = () => {
    let current = +counter.textContent;
    let increment = target / 15; // Step size

    if (current < target) {
      counter.textContent = Math.ceil(current + increment);
      setTimeout(updateCounter, 50);
    } else {
      counter.textContent = target;
    }
  };

  updateCounter(); // Start counting
});
