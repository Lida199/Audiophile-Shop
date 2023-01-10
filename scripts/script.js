document.getElementById("burger-menu").addEventListener("click", function(){
    document.getElementById("mobile-menu").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("appear");
});

let isCartVisible = false;

const htmlElement = `<div id="cart">
<div class="cart-title">
    <h1>Cart (3)</h1>
    <button>Remove all</button>
</div>
<div class="cart-item">
    <img src="../assets/cart/image-xx99-mark-two-headphones.jpg" alt="headphone one">
    <div>
        <h2>XX99 MK II</h2>
        <p>$ 2,999</p>
    </div>
    <div class="cart-button">
        <button><span class="remove">-</span><span>1</span><span class="add">+</span></button>
    </div>
</div>
<div class="cart-item">
    <img src="../assets/cart/image-xx59-headphones.jpg" alt="headphone two">
    <div>
        <h2>XX59</h2>
        <p>$ 899</p>
    </div>
    <div class="cart-button">
        <button><span class="remove">-</span><span>2</span><span class="add">+</span></button>
    </div>
</div>
<div class="cart-item">
    <img src="../assets/cart/image-yx1-earphones.jpg" alt="earphone one">
    <div>
        <h2>YX1</h2>
        <p>$ 599</p>
    </div>
    <div class="cart-button">
        <button><span class="remove">-</span><span>1</span><span class="add">+</span></button>
    </div>
</div>
<div class="cart-total">TOTAL<span>$ 5,446</span></div>
<div class="center">
    <a href="../common/checkout.html">checkout</a>
</div>
</div>`;

document.getElementById("cart-logo").addEventListener("click", function(){
    if(!isCartVisible){
        document.body.insertAdjacentHTML("beforeend", htmlElement);
        document.getElementById("overlay").classList.add("appear");
        isCartVisible = true;
    } else{
       let cardElement= document.getElementById("cart");
       cardElement.remove();
       document.getElementById("overlay").classList.remove("appear");
       isCartVisible = false;
    }
});

document.querySelectorAll(".buttons button span:last-child").forEach(element=>{
    element.addEventListener("click", function(e){
        e.target.previousElementSibling.innerHTML = +e.target.previousElementSibling.innerHTML + 1;
    })
})

document.querySelectorAll(".buttons button span:first-child").forEach(element=>{
    element.addEventListener("click", function(e){
        if(e.target.nextElementSibling.innerHTML > 1){
            e.target.nextElementSibling.innerHTML = +e.target.nextElementSibling.innerHTML - 1;
        }
    })
})