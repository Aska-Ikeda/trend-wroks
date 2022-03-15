var swiper = new Swiper(".topSlide", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
function makeActive() {
	if($("#buy-confirmation").hasClass("bg-active-buy")){
		var element = document.getElementById("buy-confirmation");
		element.classList.remove("bg-active-buy");
	}
		var element = document.getElementById("bg-active-sell");
			element.classList.toggle("bg-active-sell");
}
function makeActivesell() {
	if($("#bg-active-sell").hasClass("bg-active-sell")){
		var element = document.getElementById("bg-active-sell");
		element.classList.toggle("bg-active-sell");
	}
		var element = document.getElementById("buy-confirmation");
		element.classList.toggle("bg-active-buy");
}
function OmitDetail(e){
	if(e.target.checked){
		document.getElementById("")
	}
}
