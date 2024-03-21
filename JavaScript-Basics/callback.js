function sum(num1,num2, fnToCall){
    let result = num1+num2;
    fnToCall(result);
}
function result(data){
    console.log("result "+data);
}
function resultPassive(data){
    console.log("resultPassive "+ data);
}

sum(2,3,result);