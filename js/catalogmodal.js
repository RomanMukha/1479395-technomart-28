var buyButton = document.querySelectorAll(".buy-button");
var binPopup = document.querySelector(".popup-order");
var binClose = binPopup.querySelector(".popup-cross");
var binCloseAlt = binPopup.querySelector(".popupbutton-close");


buyButton.forEach(buyButton => { 
	buyButton.addEventListener("click", function(evt) {
		evt.preventDefault();
		binPopup.classList.add("modal-show");
		binCloseAlt.focus();
	});
});

binClose.addEventListener("click", function() {
	binPopup.classList.remove("modal-show");
});

binCloseAlt.addEventListener("click", function() {
	binPopup.classList.remove("modal-show");
});