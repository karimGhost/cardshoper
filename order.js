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
      <td  data-vi=${data.name} ><input id="go" data-vi=${data.name}  class="va io" value="1"; min="1" max="100" type="number"></td>
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




const img = Box.querySelector('.pic');
img.setAttribute('src', `${order.id}.png`);


img.setAttribute('alt', order.title)






    
})
