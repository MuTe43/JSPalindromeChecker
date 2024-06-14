
let alpha="123456789abcdefghijklmnopqrstuvwxyz";
const wordquery = document.querySelector("#text-input");
const btn = document.querySelector("#check-btn");
const res = document.querySelector("#result");
const p = document.querySelector("#result");
let word = wordquery.value;
function palidrome(word){
    let w=[];
    let x = word.toLowerCase();
    for(let i=0;i<x.length;i++){
        if(alpha.includes(x.charAt(i))){
            w.push(x.charAt(i));
        };
    }
    let wr = w.toReversed();
    return JSON.stringify(wr)==JSON.stringify(w);
};
btn.addEventListener("click",() => {
    let wo = wordquery.value;
    let b = palidrome(wo);
    if(wo==""){
        alert("Please input a value");
    }
    else{
    if(b){
    p.innerHTML = wo +" is a palindrome";
}else{
    p.innerHTML = wo +" is not a palindrome";
}};});