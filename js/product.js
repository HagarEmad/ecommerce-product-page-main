



function plus(){
    let num=document.getElementsByClassName("Zeroo");
let text=num[0].innerHTML;
let numb=Number(text);
    ++numb;

    //  let text=num[0].innerHTML;
    //  let numb=Number(text);
    //  ++numb;
    console.log(numb)
    // console.log(numb);
    
//     for(let i=numb; i<=100;i++){
//     numb=numb+1;
//     // console.log(numb)
// }
// console.log(numb)
document.getElementsByClassName("Zeroo")[0].innerHTML=numb;
    }
    // document.getElementsByClassName("Zeroo")[0].innerHTML=numb;




function minus(){
    let num=document.getElementsByClassName("Zeroo");
    let text=num[0].innerHTML;
    let numb=Number(text);
    // for(let i=numb; i>=0;i--){
if(numb>0){
    
    --numb;
    console.log(numb)
    document.getElementsByClassName("Zeroo")[0].innerHTML=numb;

}
// }
}

function Add(){

document.getElementById("Add").style.opacity="0.5"


let number=document.getElementsByClassName("Zeroo")[0].innerHTML;
console.log(number);

let bookme =document.getElementById("book_me");
console.log(bookme)




if(number != 0){
    let pop =document.getElementsByClassName("pop_cart2")[0];
pop.style.display="none";

let bookme =document.getElementById("book_me");
bookme.style.display="block";

let numberr=document.getElementsByClassName("Zeroo")[0].innerHTML;
let nbr =document.getElementById("Nbr");
nbr.innerHTML=" "+numberr+ " =";
let  Total=document.getElementById("Total");
Total.style.color="black"
Total.innerHTML="$"+numberr*125.00 +".00";


}

}

function dele(){
    let pop =document.getElementsByClassName("pop_cart2")[0];
    pop.style.display="flex";
    let bookme =document.getElementById("book_me");
bookme.style.display="none";


}
function opacit(){
    document.getElementById("Add").style.opacity="9.5"
}