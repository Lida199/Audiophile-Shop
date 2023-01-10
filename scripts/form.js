const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const addressInput = document.getElementById("address");
const zipCodeInput = document.getElementById("zip-code");
const cityInput = document.getElementById("city");
const countryInput = document.getElementById("country");
const eMoneyNumberInput = document.getElementById("e-money-number");
const eMoneyPinInput = document.getElementById("e-money-pin");

const confirmationElement = `
<div id="confirmation">
        <img src="../assets/checkout/icon-order-confirmation.svg" alt="confirmed">
        <p class="thankful-note">THANK YOU<br>
            FOR YOUR ORDER</p>
        <p class="email-confirmation">You will receive an email confirmation shortly.</p>
        <div id="some-details">
            <div class="confirmation-details">
                <div class="confirmation-item">
                    <img src="../assets/cart/image-xx99-mark-two-headphones.jpg" alt="headphone one">
                    <div>
                        <p>XX99 MK II</p>
                        <p>$ 2,999</p>
                    </div>
                    <p>x1</p>
                </div>
                <div class="confirmation-item">
                    <img src="../assets/cart/image-xx59-headphones.jpg" alt="headphone two">
                    <div>
                        <p>XX59</p>
                        <p>$ 899</p>
                    </div>
                    <p>x2</p>
                </div>
                <div class="confirmation-item">
                    <img src="../assets/cart/image-yx1-earphones.jpg" alt="earphone one">
                    <div>
                        <p>YX1</p>
                        <p>$ 599</p>
                    </div>
                    <p>x1</p>
                </div>
            </div>
            <div class="grand-total">
                <p>GRAND TOTAL</p>
                <p>$ 5,446</p>
            </div>
        </div>
        <div class="center">
            <a href="../index.html">BACK TO HOME</a>
        </div>
    </div> 
`;

document.getElementById("e-Money").addEventListener("click", function(){
    document.getElementById("appear-on-emoney").style.display = "grid";
    document.getElementById("appear-on-cash").style.display = "none";
});
document.getElementById("Cash-on-Delivery").addEventListener("click", function(){
    document.getElementById("appear-on-emoney").style.display = "none";
    document.getElementById("appear-on-cash").style.display = "flex";
});

const identifyingEmptyValues= function(input, arr){
    if(input.value === "" || input === null){
        input.classList.add("error");
        input.closest(".flex").firstElementChild.classList.add("error");
        arr.push("The field is empty");  
    }
}

const checkingInputsOnBlur = function(input){
    input.addEventListener("blur",function(e){
        if(e.target.value.length > 0){
            e.target.classList.remove("error");
            e.target.closest(".flex").firstElementChild.classList.remove("error");
        } else{
            e.target.classList.add("error");
            e.target.closest(".flex").firstElementChild.classList.add("error");
        }
    } )
};
checkingInputsOnBlur(nameInput);
checkingInputsOnBlur(emailInput);
checkingInputsOnBlur(phoneInput);
checkingInputsOnBlur(addressInput);
checkingInputsOnBlur(zipCodeInput);
checkingInputsOnBlur(cityInput);
checkingInputsOnBlur(countryInput);
checkingInputsOnBlur(eMoneyNumberInput);
checkingInputsOnBlur(eMoneyPinInput);

document.getElementById("confirm").addEventListener("click", function(){
    const errors = [];
    identifyingEmptyValues(nameInput, errors);
    identifyingEmptyValues(emailInput, errors);
    identifyingEmptyValues(phoneInput, errors);
    identifyingEmptyValues(addressInput, errors);
    identifyingEmptyValues(zipCodeInput, errors);
    identifyingEmptyValues(cityInput, errors);
    identifyingEmptyValues(countryInput, errors);
    if(!(document.getElementById("appear-on-emoney").getAttribute("style") === "display: none;")){
        identifyingEmptyValues(eMoneyNumberInput, errors);
        identifyingEmptyValues(eMoneyPinInput, errors);
    }
    if(errors.length === 0){
        document.body.insertAdjacentHTML("beforeend", confirmationElement);
        document.getElementById("overlay").classList.add("appear");
    }
});

