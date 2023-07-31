function checkValid() {
  const formSelected = document.querySelectorAll(".input-box");
  formSelected.forEach((x) => {
    if (x.value === "") {
      console.log("Error");
    }
  });
}
