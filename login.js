function cacel(){

    document.getElementById('open').style.display='none';


    document.getElementById('ope').style.display = 'block';



}




function closeIt(){
    document.getElementById('open').style.display=  'block';

    document.querySelector('.fo1').style.zIndex = "2"  ;

    document.querySelector('.contain').style.zIndex = "4";

    document.querySelector('.container').style.zIndex = "3";

    document.getElementById('ope').style.display = 'none';

document.querySelector(".ull").style.zIndex = "-1"
 document.querySelector(".f01").style.opacity = "1"










}

function ply(){

  document.querySelector(".carouse").opacity = "0.2";

}

/*

 let counter = 1;

 $('body').on("click",'.next', function() {

  $('.content').hide();


  counter++;
 $('#content-'+counter+'').show();

 if(counter > 1){
   $('.back').show()
 };

})


  */

function insta(){
  window.location.href = "http://www.instagram.com";
  }


  function quora(){
    window.location.href = "http://www.quora.com";
  }


  function twitter(){
    window.location.href = "http://www.twitter.com";
  }


  function git(){
    window.location.href = "http://www.github.io";
  }

  function google(){
   
    window.location.href ="https://www.google.com/maps";
  }
