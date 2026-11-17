/*
function calculat(){
    let fnum=Number(document.Inputform.f_number.value);
    let snum=Number(document.Inputform.s_number.value);

    let answer;

    let operator=document.Inputform.operation.value;
    if (isNaN(fnum)|| isNaN(snum)){
        document.getElementById("result").innerHTML=
        "Enter only the number ";
        return false;
    }
    switch(operator){
        case '+':
            answer=fnum+snum;
            break;
        case '-':
            answer=fnum-snum;
            break;
        case '*':
            answer=fnum*snum;
            break;
        case '/':
            if(snum==0){
                document.getElementById("resuli").innerHTML=
                "division with 0 is not allowed";
            }
            else{
                answer=fnum/snum
            }
            break;
        default:
            document.getElementById("result").innerHTML=
            "Enter only number";
            
    }
    document.getElementById("result").innerHTML=answer;
}
    */
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