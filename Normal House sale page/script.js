function opensale() {
    var salesPopup = document.querySelector('.popup');
    salesPopup.classList.add("open-sale");
    document.querySelector(".story").style.display="none"
}

function closesale() {
    var salesPopup = document.querySelector('.popup');
    salesPopup.classList.remove("open-sale");
    document.querySelector(".story").style.display="block"

   
}

