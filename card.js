window.addEventListener("DOMContentLoaded", function(e){

const order = document.querySelectorAll('div[data-box]');

order.forEach(function(clic){


 
    clic.addEventListener("click", function(e){

    const btn = e.currentTarget;

    const contain = btn;
    

    


    const orderbtn = {
        id:  clic.getAttribute('data-box'),
        title:  contain.querySelector(".item_detail").innerText,
        circle: contain.querySelector('.circle'),
        price: contain.querySelector('.item_price').innerText,
        cart_text: contain.querySelector('.cart_text').innerText,
        cart_btn: contain.querySelector('.cart_button').innerText,
    

    };

    



function disp(){
    orderbtn.circle.style.display = "none";
}


confirm("do you add this to the cart ") ? localStorage.setItem('orderbtn',JSON.stringify(orderbtn)) + alert("card successfully added to cart") + orderbtn.circle.classList.add('dow') + orderbtn.circle.classList.add('clss') + setTimeout(disp, 2000)  : alert("card not added to cart");




});

});

    

    /*const url = window.location.href.replace('cardshop.html', 'cards.html');

    window.location.href = url;
*/

});
   
 


