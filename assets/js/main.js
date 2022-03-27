var swiper = new Swiper(".topSlide", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

function makeActive() {
	if ($("#buy-confirmation").hasClass("bg-active-buy")) {
		var element = document.getElementById("buy-confirmation");
		element.classList.remove("bg-active-buy");
	}
	var element = document.getElementById("bg-active-sell");
	element.classList.add("bg-active-sell");
}

function makeActivesell() {
	if ($("#bg-active-sell").hasClass("bg-active-sell")) {
		var element = document.getElementById("bg-active-sell");
		element.classList.remove("bg-active-sell");
	}
	var element = document.getElementById("buy-confirmation");
	element.classList.add("bg-active-buy");
}



function OmitDetail(e) {
	if (e.target.checked == true) {
		$("#btn-sell-section").html(`<button type="button"
		class="buy-confirmation-btn font-24 f-bold">買
		い</button>`)
	}
	if (e.target.checked == false) {
		$("#btn-sell-section").html(`<button type="button"
		class="sell-confirmation-btn font-24 f-bold">
		売り確認
		</button>`)
	}
}
function btnSellCheckRegularOrder(e) {
	if (e.target.checked == true) {
		$("#sell_js_to_regular_order").html(`<a href="" class="completed-btn"> 決 済 </a>`)
	}
	if (e.target.checked == false) {
		$("#sell_js_to_regular_order").html(`<a href="" class="completed-btn"> 売り確認 </a>`)
	}
}
function RepaymentSaleCheck(e) {
	if (e.target.checked == true) {
		$("#js_repayment_btn").html(`<a href="" class="completed-btn"> 決 済 </a>`)
	}
	if (e.target.checked == false) {
		$("#js_repayment_btn").html(`<a href="" class="completed-btn"> 売り確認 </a>`)
	}
}
function RepaymentPurchaseCheck(e) {
	if (e.target.checked == true) {
		$("#js_repayment_Purchase_btn").html(`<a href="" class="completed-btn"> 決 済 </a>`)
	}
	if (e.target.checked == false) {
		$("#js_repayment_Purchase_btn").html(`<a href="" class="completed-btn"> 売り確認 </a>`)
	}
}
function CancelAndCorrection(e) {
	if (e.target.checked == true) {
		$("#js_cancel_correction_btn").html(`<a type="button" class="correction-btn">訂 正</a>
		<a type="button" class="cancel-button">取 消</a>`)
	}
	if (e.target.checked == false) {
		$("#js_cancel_correction_btn").html(`<a type="button" class="correction-btn">訂正確認</a>
		<a type="button" class="cancel-button">取消確認</a>`)
	}
}
function btnBuyCheckRegularOrder(e) {
	if (e.target.checked == true) {
		$("#buy_js_to_regular_order").html(`<a href="" class="completed-btn"> 決 済 </a>`)
	}
	if (e.target.checked == false) {
		$("#buy_js_to_regular_order").html(`<a href="" class="completed-btn"> 売り確認 </a>`)
	}
}
function RepaymentSaleNormal(e) {
	if (e.target.checked == true) {
		$("#js_repayment_normal_btn").html(`<a href="" class="completed-btn"> 決 済 </a>`)
	}
	if (e.target.checked == false) {
		$("#js_repayment_normal_btn").html(`<a href="" class="completed-btn"> 売り確認 </a>`)
	}
}
function ToStopNormalPaymentCheck(e) {
	if (e.target.checked == true) {
		$("#js_repayment_stop_btn").html(`<a href="" class="completed-btn"> 決 済 </a>`)
	}
	if (e.target.checked == false) {
		$("#js_repayment_stop_btn").html(`<a href="" class="completed-btn"> 売り確認 </a>`)
	}
}
function ToRepaymentSellStopPrice(e){
	document.getElementById('返済売-通常返済へ').style.display="block";
	document.getElementById('返済売-逆指値へ').style.display="none";

}
function RepaymentSaleToNormalRepayment(e){
	document.getElementById('返済売-逆指値へ').style.display="block";
	document.getElementById('返済売-通常返済へ').style.display="none";
}
function BuyStopPayment(e){
	document.getElementById('返済買-逆指値へ').style.display="none";
	document.getElementById('逆指値へ-通常返済へ').style.display="block";
}
function ToStopNormalPayment(e){
	document.getElementById('返済買-逆指値へ').style.display="block";
	document.getElementById('逆指値へ-通常返済へ').style.display="none";
}
function BuyOmitDetail(e) {
	if (e.target.checked == true) {
		$("#btn-buy-section").html(`<button type="button"
		class="buy-confirmation-btn font-24 f-bold">買
		い</button>`)
	}
	if (e.target.checked == false) {
		$("#btn-buy-section").html(`<button type="button"
		class="sell-confirmation-btn font-24 f-bold">
		売り確認
		</button>`)
	}
}
function sellBtn(e){
	document.getElementById('sell_to_regular_order').style.display="block";
	document.getElementById('buy_sell_section').style.display="none";
}
function buyBtn(e){
	document.getElementById('buy_to_regular_order').style.display="block";
	document.getElementById('buy_sell_section').style.display="none";
}
function ToShowSellSection(e){
	document.getElementById('sell_to_regular_order').style.display="none";
	document.getElementById('buy_sell_section').style.display="flex";
}
function ToShowBuySection(e){
	document.getElementById('buy_to_regular_order').style.display="none";
	document.getElementById('buy_sell_section').style.display="flex";
}

// $('#buy-btn').on('click',(e)=>{
// 	$('#buy_to_regular_order').fadeIn(100);
// })
