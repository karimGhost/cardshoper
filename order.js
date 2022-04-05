window.addEventListener("DOMContentLoaded", function(e){

    const ordered = localStorage.getItem('clck');

   let order = JSON.parse(ordered);

  

    if(ordered){
       

        const Box = document.querySelector('.item');


const detai = Box.querySelector('.item_detail');
const price = Box.querySelector('.item_price');



const cart_text = Box.querySelector('.cart_text');
const cart_button = Box.querySelector('.cart_button');

 
       


detai.innerText = order.title;
price.innerText = order.price;
cart_text.innerText = order.cart_text;
cart_button.innerText = order.cart_btn;


const img = Box.querySelector('img');
img.setAttribute('src', `image/${order.id}.png`);


img.setAttribute('alt', order.title)



}


    
});