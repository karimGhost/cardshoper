window.addEventListener("DOMContentLoaded", function(e){

const order = document.querySelectorAll('div[data-box]');

order.forEach(function(clic){


 
    clic.addEventListener("click", function(e){

    const btn = e.currentTarget;

    const contain = btn;
    

    


    const orderbtn = {
        id:  clic.getAttribute('data-box'),
        title:  contain.querySelector(".item_detail").innerText,
        price: contain.querySelector('.item_price').innerText,
        cart_text: contain.querySelector('.cart_text').innerText,
        cart_btn: contain.querySelector('.cart_button').innerText,
    

    };


    
confirm("do you add this to the cart ") ? localStorage.setItem('orderbtn',JSON.stringify(orderbtn)) + alert("card successfully added to cart") : alert("card not added to cart");

  

});

});

    

    /*const url = window.location.href.replace('cardshop.html', 'cards.html');

    window.location.href = url;
*/

});
   
 


