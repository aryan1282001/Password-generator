// let m=document.getElementById("passone")



 const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
 "/"];




// let number = Math.random() * 1000000000000;
// console.log(number);

let ranAns1="";
let ranAns2="";

for(i=0;i<15;i++){

    let ran = Math.floor(Math.random()* characters.length);
    // console.log(ran);
    let ranChar=characters[ran];
    ranAns1 += ranChar;
  

}

for(i=0;i<15;i++){

    let ran = Math.floor(Math.random()* characters.length);
    // console.log(ran);
    let ranChar=characters[ran];
    ranAns2 += ranChar;

}



function func(){
     document.getElementById("passone").innerHTML=ranAns1;
     document.getElementById("passtwo").innerHTML=ranAns2;

}
