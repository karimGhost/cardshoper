window.addEventListener("DOMContentLoaded", function(e){

    


    const order = document.querySelectorAll('button[data-box]') ;
    
    
    let items = [];
    
    for(let i = 0; i < order.length; i++){
    
    
    
        order[i].addEventListener("click", function(e){
    
    console.log( e.target.parentElement.children[4])
            if(typeof(Storage) !== 'undefined'){
    let  item = {
    
    id: i+1,
    
    name: e.target.parentElement.children[2].children[0].textContent,
    price:e.target.parentElement.children[2].children[2].querySelector('input[type="radio"]:checked').value,
    no: 0,
    circle: e.target.parentElement.children[4],
    off: e.target.parentElement.children[2].children[1].children[0].style.display =  "none",
    
    pr: e.target.parentElement.children[2].children[2].querySelector('input[type="radio"]:checked').checked = false
    };
    
    
    
    items.push(item)
      //  localStorage.setItem("items", JSON.stringify(items))
    
         confirm(`do you want to add '${item.name}  ${item.price}' to the cart `) ? localStorage.setItem('items',JSON.stringify(items)) + alert(`${item.price  + " " +   item.name} successfully added to cart`) + item.circle.classList.add('dow') + item.circle.classList.add('clss') + setTimeout(disp, 2000)  + item.off + count  : alert("Card Is discarded !!!")  + item.pr 
          let count = document.querySelector(".cart_count").innerText =  items.length ;

    
    
    if(JSON.parse(localStorage.getItem("items")) === null){
        items.push(item)  
    
        window.location.reload();
    
    }else{
        const locale = JSON.parse(localStorage.getItem("items"));
        no += 1
    
    
    }
            
                          }
                        })
}
})
  

    
    

    
    
      /*  locale.map(data =>{
          if(item.id == data.id){
               
             
          
          }
            })
    
      
    //items.push(item);
    
        localStorage.setItem("items", JSON.stringify(items))
    window.location.reload();
    }
    
    
    
    
    
    
    
            }
        })
    }
    */
    
    
    /*order.forEach(function(clic){
    
        
        clic.addEventListener("click", function(e){
    
        const btn = e.currentTarget;
    
        const contain = btn.parentNode;
        
    */
    
    
    
    /*
        let orderbtnn = [];
    
        let orderbtn = {
            id: btn.getAttribute('data-box'),
        title:  contain.querySelector(".item_detail").innerText,
        
     // pric: contain.querySelector('input[name="price"]:checked').value,
        
    pric:  contain.querySelector('input[type="radio"]:checked').value,
    
            circle: contain.querySelector('.circle'),
    
             off: contain.querySelector(".v").style.display = "none",
             
             pr:  contain.querySelector('input[type="radio"]:checked').checked = false 
            //cart_text: contain.querySelector('.cart_text').innerText,
            //cart_btn: contain.querySelector('.cart_button').innerText,
        
    
        };
    
       */
        
    
       //orderbtnn.push(orderbtn)
       
       
        //for(let i = 0; i < orderbtnn.length; i++){
    
        
    
           
           // confirm(`do you want to add '${orderbtn.pric}  ${orderbtn.title}' to the cart `) ? localStorage.setItem('orderbtn',JSON.stringify(orderbtn)) + alert(`${orderbtn.pric  + " " +   orderbtn.title} successfully added to cart`) + orderbtn.circle.classList.add('dow') + orderbtn.circle.classList.add('clss') + setTimeout(disp, 2000)  + orderbtn.off : alert("Card Is discarded !!!")  + orderbtn.pr
        
        
    
    
    
    
    
        
    
    
    /*let op = contain.querySelector('input[type="radio"]:checked').value; */
    
    
    
      
        
       // }
    
    
       
    
    
    
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
    
    
      
    
      //  })
    //})
    
            
    
    

    
    function check(){                      
        var company = document.querySelector(".cas"); 
        
        if (company.checked === true) {
           document.querySelector(".vi").style.display = "block";
           document.querySelector(".box").style.opacity= "0.1";
           document.querySelector(".vi").style.opacity = "0.9";
        }
    
    
    
      //  let lab = document.querySelector(".label");
    //lab.addEventListener("click", function(e){
     //   if(e.checked === true){
       //     e.querySelector(".vi").style.display = "none";
    
        
        
    }
    
    
        
    
    
    
    
    
        function none(){
    
            document.querySelector(".vi").style.display = "none"; 
    
            document.querySelector(".che[type = radio]").checked = true; 
    
        }
        
    
    
    
        
             
        function check1(){                      
            var company = document.querySelector(".cas1"); 
            
        
               
             
          if(company.checked === true){
                document.querySelector(".vi1").style.display = "block";
                document.querySelector(".box").style.opacity= "0.1";
                document.querySelector(".vi1").style.opacity = "0.9";
            }
        
    }
    
        function none1(){
    
            document.querySelector(".vi1").style.display = "none"; 
            document.querySelector(".che1[type = radio]").checked = true; 
    
        }
        
    
        function check2(){                      
            var company = document.querySelector(".cas2"); 
            
            if (company.checked === true) {
               document.querySelector(".vi2").style.display = "block";
               document.querySelector(".box").style.opacity= "0.1";
               document.querySelector(".vi2").style.opacity = "0.9";
            }
        
        }
    
        function none2(){
    
            document.querySelector(".vi2").style.display = "none"; 
            document.querySelector(".che2[type = radio]").checked = true; 
    
        }
        
    
        function check3(){                      
            var company = document.querySelector(".cas3"); 
            
            if (company.checked === true) {
               document.querySelector(".vi3").style.display = "block";
               document.querySelector(".box").style.opacity= "0.1";
               document.querySelector(".vi3").style.opacity = "0.9";
            }
        
        }
    
        function none3(){
    
            document.querySelector(".vi3").style.display = "none"; 
            document.querySelector(".che3[type = radio]").checked = true; 
    
    
        }
        
    
        function check4(){                      
            var company = document.querySelector(".cas4"); 
            
            if (company.checked === true) {
               document.querySelector(".vi4").style.display = "block";
               document.querySelector(".box").style.opacity= "0.1";
               document.querySelector(".vi4").style.opacity = "0.9";
            }
        
        }
    
        function none4(){
    
            document.querySelector(".vi4").style.display = "none"; 
            document.querySelector(".che4[type = radio]").checked = true; 
    
        }
        
    
        function check5(){                      
            var company = document.querySelector(".cas5"); 
            
            if (company.checked === true) {
               document.querySelector(".vi5").style.display = "block";
               document.querySelector(".box").style.opacity= "0.1";
               document.querySelector(".vi5").style.opacity = "0.9";
            }
        
        }
    
        function none5(){
    
            document.querySelector(".vi5").style.display = "none"; 
            document.querySelector(".che5[type = radio]").checked = true; 
    
        }
        
        function check6(){                      
            var company = document.querySelector(".cas6"); 
            
            if (company.checked === true) {
               document.querySelector(".vi6").style.display = "block";
               document.querySelector(".box").style.opacity= "0.1";
               document.querySelector(".vi6").style.opacity = "0.9";
            }
        
        }
    
        function none6(){
    
            document.querySelector(".vi6").style.display = "none"; 
            document.querySelector(".che6[type = radio]").checked = true; 
    
        }
        
    
        function check7(){                      
            var company = document.querySelector(".cas7"); 
            
            if (company.checked === true) {
               document.querySelector(".vi7").style.display = "block";
               document.querySelector(".box").style.opacity= "0.1";
               document.querySelector(".vi7").style.opacity = "0.9";
            }
            
            
        
        }
    
    
        function none7(){
    
            document.querySelector(".vi7").style.display = "none"; 
            document.querySelector(".chee7[type = radio]").checked = true; 
    
        }
        
        function check8(){                      
            var company = document.querySelector(".cas8"); 
            
            if (company.checked === true) {
               document.querySelector(".vi8").style.display = "block";
               document.querySelector(".box").style.opacity= "0.1";
               document.querySelector(".vi8").style.opacity = "0.9";
            }
        
        }
        function none8(){
    
            document.querySelector(".vi8").style.display = "none"; 
            document.querySelector(".che8[type = radio]").checked = true; 
    
        }
        
    
    
        function check9(){                      
            var company = document.querySelector(".cas9"); 
            
            if (company.checked === true) {
               document.querySelector(".vi9").style.display = "block";
               document.querySelector(".box").style.opacity= "0.1";
               document.querySelector(".vi9").style.opacity = "0.9";
            }
        
        }
    
        function none9(){
    
            document.querySelector(".vi9").style.display = "none"; 
            document.querySelector(".che9[type = radio]").checked = true; 
    
        }
        
    
        function check10(){                      
            var company = document.querySelector(".cas10"); 
            
            if (company.checked === true) {
               document.querySelector(".vi10").style.display = "block";
               document.querySelector(".box").style.opacity= "0.1";
               document.querySelector(".vi10").style.opacity = "0.9";
            }
        
        }
    
        function none10(){
    
            document.querySelector(".vi10").style.display = "none"; 
            document.querySelector(".che10[type = radio]").checked = true; 
    
        }
        
    
    
    
        function check11(){                      
            var company = document.querySelector(".cas11"); 
            
            if (company.checked === true) {
               document.querySelector(".vi11").style.display = "block";
               document.querySelector(".box").style.opacity= "0.1";
               document.querySelector(".vi11").style.opacity = "0.9";
            }
        
        }
    
        function none11(){
    
            document.querySelector(".vi11").style.display = "none"; 
            document.querySelector(".che11[type = radio]").checked = true; 
    
        }
        
    
    
      
        function check12(){                      
            var company = document.querySelector(".cas12"); 
            
            if (company.checked === true) {
               document.querySelector(".vi12").style.display = "block";
               document.querySelector(".box").style.opacity= "0.1";
               document.querySelector(".vi12").style.opacity = "0.9";
            }
        
        }
    
        function none12(){
    
            document.querySelector(".vi12").style.display = "none"; 
            document.querySelector(".che12[type = radio]").checked = true; 
    
        }
        
        function check13(){                      
            var company = document.querySelector(".cas13"); 
            
            if (company.checked === true) {
               document.querySelector(".vi13").style.display = "block";
               document.querySelector(".box").style.opacity= "0.1";
               document.querySelector(".vi13").style.opacity = "0.9";
            }
        
        }
    
    
        function none13(){
    
            document.querySelector(".vi13").style.display = "none"; 
            document.querySelector(".che13[type = radio]").checked = true; 
    
        }
        
    
        function check14(){                      
            var company = document.querySelector(".cas14"); 
            
            if (company.checked === true) {
               document.querySelector(".vi14").style.display = "block";
               document.querySelector(".box").style.opacity= "0.1";
               document.querySelector(".vi14").style.opacity = "0.9";
            }
        
        }
    
    
        function none14(){
    
            document.querySelector(".vi14").style.display = "none"; 
            document.querySelector(".che14[type = radio]").checked = true; 
    
        }
        
    
    
        function check15(){                      
            var company = document.querySelector(".cas15"); 
            
            if (company.checked === true) {
               document.querySelector(".vi15").style.display = "block";
               document.querySelector(".box").style.opacity= "0.1";
               document.querySelector(".vi15").style.opacity = "0.9";
            }
        
        }
      
        function none15(){
    
            document.querySelector(".vi15").style.display = "none"; 
            document.querySelector(".che15[type = radio]").checked = true; 
    
        }
    
