function login(){

    var user = document.getElementById('username');
    var pass = document.getElementById('password');

    var curuser = 'chirag';
    var curpass = '12345';

    if (user.value == curuser){
        if(pass.value == curpass){
            alert("You are Succesfully loged in..!")
        }
        else{
            alert("Enter username password which is given in placeholder..!")
        }
    }
    else{
        alert("Enter username password which is given in placeholder..!")
    }
}

function add(){
    let no1 = document.getElementById('num1').value;
    let no2 = document.getElementById('num2').value;
    console.log(no1,no2);
    if (no1 == "" && no2 == ""){
        alert("Enter input numbers..");
    } 
    else{
        let add = parseInt(no1) + parseInt(no2);
        console.log(add);
        alert("Addition is: "+ add);
    }
}
function sub(){
    let no1 = document.getElementById('num1').value;
    let no2 = document.getElementById('num2').value;
    console.log(no1,no2);
    if (no1 == "" && no2 == ""){
        alert("Enter input numbers..");
    }
    else{
        let sub = parseInt(no1) - parseInt(no2);
        console.log(sub);
        alert("Subtraction is: "+ sub); 
    }
}
function mul(){
    let no1 = document.getElementById('num1').value;
    let no2 = document.getElementById('num2').value;
    console.log(no1,no2);
    if (no1 == "" && no2 == ""){
        alert("Enter input numbers..");
    }
    else{
        let mul = parseInt(no1) * parseInt(no2);
        console.log(mul);
        alert("Multiplication is: "+ mul); 
    }
}