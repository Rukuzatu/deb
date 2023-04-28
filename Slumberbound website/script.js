function showMore() {
  var dots = document.querySelector(".read-more");
  var btnText = document.querySelector("button");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show More";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show Less";
  }
}
