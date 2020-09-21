let num = parseInt(window.prompt("Please input value between 1-100"))
while(num<1 || num>100 || isNaN(num)){
    num = window.prompt("PLease only input a number between 1-100")
}
let inputString = num.toString()


let str = "";

if(num%3==0){
    str = str + "Fizz"
}

for(i=0;i<inputString.length;i++){
    if(inputString[i]==3){
        str = str + "Fizz"
    }
}

if(num%5==0){
    str = str + "Buzz"
}

for(i=0;i<inputString.length;i++){
    if(inputString[i]==5){
        str = str + "Buzz"
    }
}

if(num%7==0){
    str = str + "Woof"
}

for(i=0;i<inputString.length;i++){
    if(inputString[i]==7){
        str = str + "Woof"
    }
}

if(str!=""){
    console.log(str)
}else{
    console.log(num)
}