let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// console.log(btns);
btns.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    console.log(e.currentTarget.classList);
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
      value.style.color = "red";
    }
    value.textContent = count;
  });
});
