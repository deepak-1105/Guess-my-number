let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");
let number = [Math.floor(Math.random()*10)]

btn.addEventListener("click", function(){
let input = document.getElementById("userInput").value;
if(input==number){
    output.innerHTML="You guessed right"
}
else if(input<number){
    output.innerHTML="You guessed too low!"
};
if(input>number){
    output.innerHTML="You guessed too high!"
}
});