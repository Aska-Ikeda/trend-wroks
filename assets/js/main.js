var swiper = new Swiper(".topSlide", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
function makeActive() {
	var element = document.getElementById("bg-active-sell");
		element.classList.toggle("bg-active-sell");
}
function makeActivesell() {
	var element = document.getElementById("buy-confirmation");
		element.classList.toggle("bg-active-buy");
}
function OmitDetail(e){
	if(e.target.checked){
		document.getElementById("")
	}
}
