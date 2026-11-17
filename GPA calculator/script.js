function calculateGPA(){
    let name= document.getElementById("name").value;
    let mark1= Number(document.getElementById("fmark").value);
    let mark2= Number(document.getElementById("smark").value);
    let mark3= Number(document.getElementById("tmark").value);

  
    if (mark1 < 0 || mark1 > 100 ||
        mark2 < 0 || mark2 > 100 ||
        mark3 < 0 || mark3 > 100 ){
            alert("Please Enter the Mark between 0 and 100");
            return;
        }

    let avarage = (mark1+mark2+mark3)/3;

    let status;
    let grade;

    if(avarage<50){
        grade = "F";
        status = "Faill";
    }
    else if(avarage >= 50 && 
        avarage <60){
            grade = "D";
        status = "Pass";
        }
    else if(avarage >= 60 && 
        avarage <70){
            grade = "C";
        status = "Pass";
        }

    else if(avarage > 70 && 
        avarage <80){
            grade = "B";
            status = "Pass";
        }

    else if(avarage > 80 && 
        avarage <90){
            grade = "A";
            status = "Pass";
        }

    else{
            grade = "A+";
            status = "Pass";
    }

    document.getElementById("avarage").innerHTML=
    "Student Name: " + name + "<br>"+
    "Avarage:" + avarage.toFixed(2)+ "<br>"+
    "Grade: " + grade + "<br>"+
    "Status: " + status;
}

function Clear(){
    let name= document.getElementById("name").value="";
    let mark1= document.getElementById("fmark").value="";
    let mark2= document.getElementById("smark").value="";
    let mark3= document.getElementById("tmark").value="";

    document.getElementById("avarage").innerHTML="";
}
