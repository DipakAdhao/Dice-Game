// button click genrate random number
//genrate new img according to the random number
//text change according to the result of number

  document.querySelector("button").addEventListener("click", result);

  

 function result(){

 //for img1

 let img1 = document.querySelectorAll("img")[0];


 let randomNumber =  Math.floor(Math.random()*6 + 1);

 let randomImg ="images/" + "dice" + randomNumber + ".png";
 
 img1.setAttribute("src",randomImg);
 
// for img2


let img2 = document.querySelectorAll("img")[1];


 let randomNumber2 =  Math.floor(Math.random()*6 + 1);

 let randomImg2 ="images/" + "dice" + randomNumber2 + ".png";
 
 img2.setAttribute("src",randomImg2);

 
  

 if(randomNumber<randomNumber2){

   document.querySelector("h1").innerHTML = "Player 2 won!"

}
else if (randomNumber>randomNumber2){

   document.querySelector("h1").innerHTML="Player 1 won!"
}
else{

   document.querySelector("h1").innerHTML = "Draw"
}




};


 




  


