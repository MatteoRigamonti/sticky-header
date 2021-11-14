// Sticky Header
var header = document.getElementById("menu");
var sticky = header.offsetTop;

// var elBody = document.getElementsByTagName("body")[0];
var elBody = document.body;

function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add("fixed-top");
		elBody.style.paddingTop = header.offsetHeight + "px";
	} else {
		header.classList.remove("fixed-top");
		elBody.style.paddingTop = null;
	}
}

window.onscroll = function () {
	myFunction();
};
// END - Sticky Header

// Collapse
var headerCollapse = header.querySelector(".navbar-collapse");

headerCollapse.addEventListener("show.bs.collapse", function () {
	elBody.classList.add("overflow-hidden");
});

headerCollapse.addEventListener("hidden.bs.collapse", function () {
	elBody.classList.remove("overflow-hidden");
});
