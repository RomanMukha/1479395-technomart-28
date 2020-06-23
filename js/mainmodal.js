var writeUsButton = document.querySelector(".button-contacts");
var writeUsPopup = document.querySelector(".modal-contacts");
var writeUsClose = writeUsPopup.querySelector(".popup-cross");
var writeUsForm = writeUsPopup.querySelector(".popup-form");
var writeUsName = writeUsPopup.querySelector(".form-login-input");
var writeUsEmail = writeUsPopup.querySelector(".form-email-input");
var writeUsText = writeUsPopup.querySelector(".form-text-input");

var mapPopup = document.querySelector(".popup-map");
var mapClose = mapPopup.querySelector(".popup-cross");
var mapButton = document.querySelector(".open-fullmap");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
	storageName = localStorage.getItem("username");
	storageEmail = localStorage.getItem("email");
} catch (err) {
	isStorageSupport = false;
}

writeUsButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeUsPopup.classList.add("modal-show");

	if (storageName && storageEmail) {
		writeUsName.value = storageName;
		writeUsEmail.value = storageEmail;
		writeUsText.focus();
	} else if (storageName && !storageEmail) {
			writeUsName.value = storageName;
			writeUsEmail.focus();
	} else if (!storageName && storageEmail) {
			writeUsEmail.value = storageEmail;
			writeUsName.focus();
	} else {
		writeUsName.focus();
	}
});

writeUsClose.addEventListener("click", function (evt) {
	writeUsPopup.classList.remove("modal-show");
	writeUsPopup.classList.remove("modal-error");
});

writeUsForm.addEventListener("submit", function (evt) {
	if (!writeUsName.value || !writeUsEmail.value || !writeUsText.value) {
		evt.preventDefault();
		writeUsPopup.classList.remove("modal-error");
		writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
		writeUsPopup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("username", writeUsName.value);
			localStorage.setItem("email", writeUsEmail.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (writeUsPopup.classList.contains("modal-show")) {
			writeUsPopup.classList.remove("modal-show");
			writeUsPopup.classList.remove("modal-error");
		}
		if (mapPopup.classList.contains("modal-show")) {
			mapPopup.classList.remove("modal-show");
		}
	}
});


mapButton.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function() {
	mapPopup.classList.remove("modal-show");
});