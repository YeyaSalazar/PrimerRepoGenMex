let num1 = Number(prompt("Dame el primer numero"));
let num2 = Number(prompt("Dame el segundo numero"));
let num3 = Number(prompt("Dame el tercer numero"));

let numerosOrdenados = [];


if(num1 == num2 || num2 == num3 || num1 == num3){
    console.log("Hay números que se están repitiendo")
}else if(num1>num2 && num1>num3){
    if(num2>num3){
        console.log(numerosOrdenados = [num1, num2, num3]);
        }else{
            console.log(nummerosOrdenados = [num1, num3, num2]);
        }
}else if(num1<num2 && num1<num3){
    if(num2<num3){
    console.log(numerosOrdenados = [num3, num2, num1]);
    }else{
        console.log(numerosOrdenados = [num2, num3, num1]);
    }
}else if(num1>num2 && num1<num3){
    
}