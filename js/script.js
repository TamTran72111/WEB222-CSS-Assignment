let select = document.querySelector("nav select");

select.addEventListener("change", () => {
  window.location.pathname = select.value;
});
