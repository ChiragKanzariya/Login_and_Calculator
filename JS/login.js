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

function filter(x){
    x.style.filter="grayscale(0)";
    x.style.transform="scale(1.1)";
}

function filterremove(x){
    x.style.filter="grayscale(100%)";
    x.style.transform="scale(1)";
}
function zoom(x){
    console.log(x.src);
    var fullPath = x.src;
    var filename = fullPath.replace(/^.*[\\\/]/, '');
    console.log(filename);
    let n = filename.lastIndexOf('.');
    let newfilename = filename.substring(0,n) + 'x' + filename.substring(n);
    newfilename = "../IMAGES/" + newfilename;
    document.getElementById("photo").src = newfilename;
    document.getElementById('z').style.display = 'inline';
    document.getElementById('gallery').style.display = 'block';
}

