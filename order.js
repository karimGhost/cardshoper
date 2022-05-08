window.addEventListener("DOMContentLoaded", function(e){

    const ordered = localStorage.getItem('orderbtn');

   let order = JSON.parse(ordered);

  

    if(ordered){
       

        const Box = document.querySelector('.items');


const detai = Box.querySelector('.item_detail');




const price = Box.querySelector('.item_price');



//const cart_text = Box.querySelector('.cart_text');
//const cart_button = Box.querySelector('.cart_button');

 
    detai.innerText = order.title;
price.innerText = order.pric ;

const pric = document.querySelector('.total').innerText = order.pric;

  

//price.innerText = order.pri;

//cart_text.innerText = order.cart_text;
//cart_button.innerText = order.cart_btn;


const img = Box.querySelector('.pic');
img.setAttribute('src', `image/${order.id}.png`);


img.setAttribute('alt', order.title)



}


    
});