
   function calculator(){
    let fnum=Number(document.getElementById("num1").value);
    let snum=Number(document.getElementById("num2").value);

    let result;
    let oprator=document.getElementById("select").value;

    if(document.getElementById("num1").value===""||
document.getElementById("num2").value===""||
document.getElementById("select").value===""){

    document.getElementById("result").innerHTML=
    "Enter all the required value";
}

switch (oprator) {
    case '+':
        result =fnum + snum;
        break;
    case '-':
        result =fnum - snum;
        break;

    case '*':
        result =fnum * snum;
        break;

    case '/':
        if(snum==0){
            result="division by zero is not possible";
            
        }
        else{
             result =fnum / snum;
        break;
        }
       
    
}
document.getElementById("result").innerHTML= "Result :"+ result;
   }

function clear(){
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("select").value="";

    document.getElementById("result").innerHTML="Result:";
}