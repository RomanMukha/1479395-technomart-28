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

var slideBg = document.querySelector(".big-slide");
var slideButton = slideBg.querySelectorAll(".bigslide-arrow");
var slideDot = slideBg.querySelectorAll(".bigslide-dot");
var slideDotOne = slideBg.querySelector(".bigslide-dot-one");
var slideDotTwo = slideBg.querySelector(".bigslide-dot-two");
var slideTitlePerfo = slideBg.querySelector(".big-slide-title-perfo");
var slideTitleDrill = slideBg.querySelector(".big-slide-title-drill");

var serviceSwitchDelivery = document.querySelector(".services-switch-delivery");
var serviceSwitchGuarantee = document.querySelector(".services-switch-guarantee");
var serviceSwitchCredit = document.querySelector(".services-switch-credit");
var serviceCatDelivery = document.querySelector(".services-category-delivery");
var serviceCatGuarantee = document.querySelector(".services-category-guarantee");
var serviceCatCredit = document.querySelector(".services-category-credit");

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


slideButton.forEach(slideButton => {
	slideButton.addEventListener("click", function() {
		if (slideBg.classList.contains("perforator-background")) {
			slideBg.classList.remove("perforator-background");
			slideBg.classList.add("drill-background");
			slideDotTwo.classList.remove("bigslide-dot-active");
			slideDotOne.classList.add("bigslide-dot-active");
			slideTitlePerfo.classList.remove("big-slide-active");
			slideTitleDrill.classList.add("big-slide-active");
		}
		else {
			slideBg.classList.remove("drill-background");
			slideBg.classList.add("perforator-background");
			slideDotOne.classList.remove("bigslide-dot-active");
			slideDotTwo.classList.add("bigslide-dot-active");
			slideTitleDrill.classList.remove("big-slide-active");
			slideTitlePerfo.classList.add("big-slide-active");
		}
	});
});


slideDotOne.addEventListener("click", function() {
	if (slideBg.classList.contains("perforator-background")) {
		slideBg.classList.remove("perforator-background");
		slideBg.classList.add("drill-background");
		slideDotTwo.classList.remove("bigslide-dot-active");
		slideDotOne.classList.add("bigslide-dot-active");
		slideTitlePerfo.classList.remove("big-slide-active");
		slideTitleDrill.classList.add("big-slide-active");	
	}
});

slideDotTwo.addEventListener("click", function() {
	if (slideBg.classList.contains("drill-background")) {
		slideBg.classList.remove("drill-background");
		slideBg.classList.add("perforator-background");
		slideDotOne.classList.remove("bigslide-dot-active");
		slideDotTwo.classList.add("bigslide-dot-active");
		slideTitlePerfo.classList.add("big-slide-active");
		slideTitleDrill.classList.remove("big-slide-active");	
	}
});

/*slideDot.forEach(slideDot => {
	slideDot.addEventListener("click", function() {
		if (slideBg.classList.contains("perforator-background")) {
			slideBg.classList.remove("perforator-background");
			slideBg.classList.add("drill-background");
			slideDotTwo.classList.remove("bigslide-dot-active");
			slideDotOne.classList.add("bigslide-dot-active");
			slideTitlePerfo.classList.remove("big-slide-active");
			slideTitleDrill.classList.add("big-slide-active");	
		}
		else {
			slideBg.classList.remove("drill-background");
			slideBg.classList.add("perforator-background");
			slideDotOne.classList.remove("bigslide-dot-active");
			slideDotTwo.classList.add("bigslide-dot-active");
			slideTitleDrill.classList.remove("big-slide-active");
			slideTitlePerfo.classList.add("big-slide-active");
		}
	});
});*/


serviceSwitchDelivery.addEventListener("click", function() {
	if (serviceSwitchDelivery.classList.contains("switch-active")) {
		;
	}
	else if (serviceSwitchGuarantee.classList.contains("switch-active")) {
		serviceSwitchGuarantee.classList.remove("switch-active");
		serviceSwitchDelivery.classList.add("switch-active");
		serviceCatGuarantee.classList.remove("services-active");
		serviceCatDelivery.classList.add("services-active");
	}
	else {
		serviceSwitchCredit.classList.remove("switch-active");
		serviceSwitchDelivery.classList.add("switch-active");
		serviceCatCredit.classList.remove("services-active");
		serviceCatDelivery.classList.add("services-active");
	}
});

serviceSwitchGuarantee.addEventListener("click", function() {
	if (serviceSwitchGuarantee.classList.contains("switch-active")) {
		;
	}
	else if (serviceSwitchDelivery.classList.contains("switch-active")) {
		serviceSwitchDelivery.classList.remove("switch-active");
		serviceSwitchGuarantee.classList.add("switch-active");
		serviceCatDelivery.classList.remove("services-active");
		serviceCatGuarantee.classList.add("services-active");
	}
	else {
		serviceSwitchCredit.classList.remove("switch-active");
		serviceSwitchGuarantee.classList.add("switch-active");
		serviceCatCredit.classList.remove("services-active");
		serviceCatGuarantee.classList.add("services-active");
	}
});

serviceSwitchCredit.addEventListener("click", function() {
	if (serviceSwitchCredit.classList.contains("switch-active")) {
		;
	}
	else if (serviceSwitchDelivery.classList.contains("switch-active")) {
		serviceSwitchDelivery.classList.remove("switch-active");
		serviceSwitchCredit.classList.add("switch-active");
		serviceCatDelivery.classList.remove("services-active");
		serviceCatCredit.classList.add("services-active");
	}
	else {
		serviceSwitchGuarantee.classList.remove("switch-active");
		serviceSwitchCredit.classList.add("switch-active");
		serviceCatGuarantee.classList.remove("services-active");
		serviceCatCredit.classList.add("services-active");
	}
});