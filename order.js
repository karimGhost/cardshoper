window.addEventListener("DOMContentLoaded", function(e){

    
    let ordered = localStorage.getItem('items');

   let order =  JSON.parse(ordered)
 
   for(let i = 0; i < order.length; i++){
   
   
    let goo = [];
 
   
    
     
 

  let it = document.querySelector("#table");

  let table = '';

  table +=  `<tr>
  <th class="p">cart</th>
  <th>amount</th>
  <th>price</th>
  <th class="price"> <i class="fa fa-shopping-cart"></i></th>
  
</tr> ` ;

  JSON.parse(localStorage.getItem('items')).map(data=>{

   

    table += ` 
    <tr>
      <td data-vi=${data.name} style="cursor:pointer" #="go"  class=" va item_detail">${data.name}</td> 
      <td  data-vi=${data.name} ><input id="go" data-vi=${data.name}  class="va val io" value="1"; min="1" max="100" type="number"></td>
      <td class=" item_price" style="display: none">  ${data.price} </td>
  <td class="fo total">${data.price}</td>
      </tr>
    

   
    `





})  
 
  it.innerHTML = table;
let q = document.querySelector(".item_price").innerText;
document.querySelector(".total").innerText = q;

   }

let vlk = document.querySelector("#table");

let o = document.querySelector(".vl")
.addEventListener("click", function(e){
 
  let va = e.querySelector(".item_price");

  console.log(va)




})


 
   
  

/*let vo = document.querySelector(".total")
for(let i = 0; i < vo.length; i++){

console.log(vo.innerText = 2)
}



function vlad(){
  let v = document.querySelector(".val").value;
  v.forEach(function(g){
  

 let vo = document.querySelector(".total");
vo.forEach(function(e){
  e.innerText = g * v;
})
})
}

vlad()
vlad()
/*
function vald(){
  let iv =  document.querySelector("#table");
 
 
 let g = iv.children[0].querySelector(".item_price").innerText;
  //let v  = order[i].price;
  
  
 
 console.log(g *= v)
 document.querySelector(".total").innerText =  v; 
 
 //document.querySelector(".total").innerText = iv * 1;
 
 }
 
 vald()



//const pri = document.querySelector('.total').innerText = data.price;

  


     /*   const Box = document.querySelector('.items');


const detai = Box.querySelector('.item_detail');




const price = Box.querySelector('.item_price');



//const cart_text = Box.querySelector('.cart_text');
//const cart_button = Box.querySelector('.cart_button');



detai.innerText = order.title;
price.innerText = order.pric ;



 <tfoot>
      <tr class="totalfoot">
      <th style="color: black; font-weight: bold;" class="totalfoot" ><u >total</u></th>
    </tr>
    
    <tr class="foot">
      <td style="text-align: center; color: #0ee8f7;" class="foot total"></td>
    </tr>
    </tfoot>
*/

//const pric = document.querySelector('.total').innerText = order.pric;
  


//price.innerText = order.pri;

//cart_text.innerText = order.cart_text;
//cart_button.innerText = order.cart_btn;


const img = Box.querySelector('.pic');
img.setAttribute('src', `image/${order.id}.png`);


img.setAttribute('alt', order.title)






    
})