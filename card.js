window.addEventListener("DOMContentLoaded", function(e){

    


const order = document.querySelectorAll('button[data-box]');

order.forEach(function(clic){

    
    clic.addEventListener("click", function(e){

    const btn = e.currentTarget;

    const contain = btn.parentNode;
    

    
    const orderbtn = {
        id: btn.getAttribute('data-box'),
    title:  contain.querySelector(".item_detail").innerText,
    
 // pric: contain.querySelector('input[name="price"]:checked').value,
    
pric:  contain.querySelector('input[type="radio"]:checked').value,

        circle: contain.querySelector('.circle'),
         
        //cart_text: contain.querySelector('.cart_text').innerText,
        //cart_btn: contain.querySelector('.cart_button').innerText,
    

    };




function disp(){
    orderbtn.circle.style.display = "none";

}







//let op = contain.querySelector('input[type="radio"]:checked').value;





    confirm(`do you want to add '${orderbtn.pric}  ${orderbtn.title}' to the cart `) ? localStorage.setItem('orderbtn',JSON.stringify(orderbtn)) + alert(`${orderbtn.pric  + " " +   orderbtn.title} successfully added to cart`) + orderbtn.circle.classList.add('dow') + orderbtn.circle.classList.add('clss') + setTimeout(disp, 2000)  : alert("card not added to cart");

    



    })



    })


 



   /* const url = window.location.href.replace('cardshop.html', 'cards.html');

    window.location.href = url; */


  //  let bt = document.querySelector('input[name="price"]:checked').value;


/*
   
let pages = ["cardshop.html","cardshop2.html","cards.html"];


function next(){

    let hr = window.location.href.split('ca');
  
    let page = hr[0].replace('/', '');
  
    let nxt = pages.indexOf(page) + 1;
  
    if(nxt > pages.length) nxt = 0;
  
  
    let rdr = hr[nxt] + '' + pages[nxt];
  
    window.location.href = rdr;
  }
  

  
function prev(){


    let hr = window.location.href.split('/');
    
    let page = hr[1].replace('/', '');
    
    let nxt = pages.indexOf(page) - 1;
    
    if(nxt < 0) nxt = pages.length - 1;
    
    
    let rdr = hr[0] + '' + pages[nxt];
    
    window.location.href = rdr;
    }




    function next(){
        let hr = window.location.href.split('/$').pop();

        let page = hr[0].replace("/", '');
        
       let h = pages.indexOf(page) + 1;

if(h == pages.length) h = 0 ;


       let rdr = pages[1].replace(pages[0])

       window.location.href = rdr;
    }
    */


  


});


